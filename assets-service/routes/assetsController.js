const express = require('express');
const multer = require('multer');
const B2 = require('backblaze-b2');
const router = express.Router();

// Configuración de multer: almacenar el archivo en memoria para subirlo directamente
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Inicializar Backblaze B2 con variables de entorno
const b2 = new B2({
  applicationKeyId: process.env.B2_APPLICATION_KEY_ID,
  applicationKey: process.env.B2_APPLICATION_KEY
});

// Realizar la autorización a B2 al iniciar el servicio
(async () => {
  try {
    const response = await b2.authorize();
    console.log("Backblaze B2 autorizado:", response.data);
  } catch (error) {
    console.error("Error autorizando Backblaze B2:", error);
  }
})();

// Endpoint para subir un asset
router.post('/upload', upload.single('asset'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se ha enviado ningún archivo.' });
    }
    const fileBuffer = req.file.buffer;
    const fileName = `${Date.now()}_${req.file.originalname}`;
    const bucketId = process.env.B2_BUCKET_ID;

    // Solicitar URL de subida
    const uploadUrlResponse = await b2.getUploadUrl({ bucketId });
    const { uploadUrl, authorizationToken } = uploadUrlResponse.data;

    // Subir el archivo a Backblaze B2
    const uploadResponse = await b2.uploadFile({
      uploadUrl,
      uploadAuthToken: authorizationToken,
      fileName,
      data: fileBuffer,
      contentType: req.file.mimetype
    });

    // Construir la URL pública según la configuración (tu bucket debe estar configurado para acceso público)
    const publicUrl = `${process.env.B2_PUBLIC_URL}${fileName}`;

    res.json({ url: publicUrl });
  } catch (error) {
    console.error("Error subiendo archivo a B2:", error);
    res.status(500).json({ error: 'Error al subir el archivo.' });
  }
});

module.exports = router;
import React from 'react';

const Toolbar = () => {
  return (
    <div className="toolbar">
      <button>Seleccionar</button>
      <button>Mover</button>
      <button>Redimensionar</button>
      <button>Rotar</button>
      {/* Se pueden agregar más herramientas según los requerimientos */}
    </div>
  );
};

export default Toolbar;
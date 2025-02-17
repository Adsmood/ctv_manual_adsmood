import React from 'react';

const PropertiesPanel = () => {
  return (
    <div className="properties-panel">
      <h3>Propiedades del Elemento</h3>
      <label>
        X:
        <input type="number" name="x" />
      </label>
      <br />
      <label>
        Y:
        <input type="number" name="y" />
      </label>
      <br />
      <label>
        Ancho:
        <input type="number" name="width" />
      </label>
      <br />
      <label>
        Alto:
        <input type="number" name="height" />
      </label>
      <br />
      <label>
        Rotación:
        <input type="number" name="rotation" />
      </label>
    </div>
  );
};

export default PropertiesPanel;
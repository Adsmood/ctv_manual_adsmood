import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

const EditorCanvas = () => {
  const [elements, setElements] = useState([
    {
      id: 'element1',
      x: 50,
      y: 50,
      width: 200,
      height: 150,
      rotation: 0
    }
  ]);

  const updateElement = (id, data) => {
    setElements(prev =>
      prev.map(el => (el.id === id ? { ...el, ...data } : el))
    );
  };

  return (
    <div className="canvas-container">
      {elements.map(el => (
        <Rnd
          key={el.id}
          size={{ width: el.width, height: el.height }}
          position={{ x: el.x, y: el.y }}
          bounds="parent"
          onDragStop={(e, d) => updateElement(el.id, { x: d.x, y: d.y })}
          onResizeStop={(e, direction, ref, delta, position) =>
            updateElement(el.id, {
              width: ref.offsetWidth,
              height: ref.offsetHeight,
              ...position
            })
          }
          style={{
            transform: `rotate(${el.rotation}deg)`,
            border: '1px solid #000',
            backgroundColor: '#f0f0f0'
          }}
        >
          <div style={{ width: '100%', height: '100%' }}>
            {/* Aquí se renderiza el contenido del elemento (imágenes, texto, etc.) */}
          </div>
        </Rnd>
      ))}
    </div>
  );
};

export default EditorCanvas;
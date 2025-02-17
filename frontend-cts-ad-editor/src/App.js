import React from 'react';
import EditorCanvas from './components/EditorCanvas';
import Toolbar from './components/Toolbar';
import PropertiesPanel from './components/PropertiesPanel';
import './styles/App.css';

const App = () => {
  return (
    <div className="app-container">
      <Toolbar />
      <EditorCanvas />
      <PropertiesPanel />
    </div>
  );
};

export default App;
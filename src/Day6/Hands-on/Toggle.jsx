import React, { useState } from 'react';
import './Toggle.css';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div 
      className={`toggle-container ${isOn ? 'on' : 'off'}`} 
      onClick={() => setIsOn(!isOn)}
    >
      <div className="toggle-handle" />
    </div>
  );
};

export default ToggleButton;

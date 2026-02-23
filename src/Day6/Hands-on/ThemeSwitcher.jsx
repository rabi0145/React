import React, { useState } from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="app-container" data-theme={isDark ? 'dark' : 'light'}>
      <div className="card">
        <h1>{isDark ? 'Dark Mode' : 'Light Mode'}</h1>
        <p>Click the toggle to switch themes!</p>
        
        {/* The Toggle Button */}
        <div 
          className={`toggle-track ${isDark ? 'active' : ''}`} 
          onClick={() => setIsDark(!isDark)}
        >
          <div className="toggle-thumb" />
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;

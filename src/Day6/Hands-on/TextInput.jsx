import React, { useState } from 'react';

function TextInputApp() {
  // 1. Initialize state for the text input
  const [inputText, setInputText] = useState("");

  // 2. Handle changes to update state in real-time
  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Real-Time Text Preview</h2>
      
      {/* 3. Bind the value and the change handler */}
      <input
        type="text"
        placeholder="Type something..."
        value={inputText}
        onChange={handleChange}
        style={{ padding: '10px', width: '300px', fontSize: '16px' }}
      />

      {/* 4. Display the text below */}
      <div style={{ marginTop: '20px' }}>
        <strong>Your text:</strong>
        <p style={{ fontSize: '1.5rem', color: '#555' }}>
          {inputText || "Waiting for input..."}
        </p>
      </div>
    </div>
  );
}

export default TextInputApp;

import React, { useState } from 'react';

function CounterApp() {
  // Declare a state variable named 'count', initialized to 0
  const [count, setCount] = useState(0);

  // Function to increase the count
  const increment = () => setCount(prevCount => prevCount + 1);

  // Function to decrease the count
  const decrement = () => setCount(prevCount => prevCount - 1);

  // Function to set the count back to 0
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Counter App</h1>
      <h2 style={{ fontSize: '3rem' }}>{count}</h2>
      
      <button onClick={increment} style={buttonStyle}>Increment</button>
      <button onClick={decrement} style={buttonStyle}>Decrement</button>
      <button onClick={reset} style={{ ...buttonStyle, backgroundColor: '#f44336' }}>Reset</button>
    </div>
  );
}

// Simple inline styles for buttons
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  margin: '5px',
  cursor: 'pointer',
  borderRadius: '5px'
};

export default CounterApp;

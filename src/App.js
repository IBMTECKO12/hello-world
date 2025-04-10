import React, { useState } from 'react';
import './App.css';

function ClickCounter() {
  const [count, setCount] = useState(0);
  const MAX_LIMIT = 10;

  const increaseCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="counter-app">
      <h1>Click Counter</h1>
      <div className="counter-display">
        <p>Current Count: <span className="count">{count}</span></p>
        
        {count >= MAX_LIMIT && (
          <p className="limit-message">You've reached the limit!</p>
        )}
      </div>
      
      <div className="button-group">
        <button 
          onClick={increaseCount} 
          disabled={count >= MAX_LIMIT}
          className="increase-btn"
        >
          Increase
        </button>
        
        <button 
          onClick={decreaseCount} 
          disabled={count === 0}
          className="decrease-btn"
        >
          Decrease
        </button>
        
        <button 
          onClick={resetCount}
          className="reset-btn"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default ClickCounter;
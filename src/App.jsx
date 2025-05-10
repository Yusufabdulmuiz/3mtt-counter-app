import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const limit = 35;

  const increment = () => {
    if (count < limit) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="container">
      <h1 className="heading">Click Counter</h1>
      <p className="count">Count: {count}</p>

      <div className="button-container">
        <button className="button increase" onClick={increment}>
          Increase
        </button>
        <button className="button decrease" onClick={decrement}>
          Decrease
        </button>
      </div>

      {count === limit && <p className="message limit">You've reached the limit!</p>}
      {count === 0 && <p className="message zero">Count cannot go below zero</p>}
    </div>
  );
};

export default App;

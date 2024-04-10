import React, { useState } from 'react';
import './Trading.css';

const Trading = () => {
  // State variables to hold form data
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [action, setAction] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: Add logic to execute trade
    console.log('Trade submitted:', { symbol, quantity, action });
    // Clear form fields after submission
    setSymbol('');
    setQuantity('');
    setAction('');
  };

  return (
    <section id="trading">
      <h2>Trade Stocks</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="symbol">Symbol:</label>
          <input
            type="text"
            id="symbol"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="action">Action:</label>
          <select
            id="action"
            value={action}
            onChange={(e) => setAction(e.target.value)}
          >
            <option value="">Select action</option>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>
        <button type="submit">Submit Trade</button>
      </form>
    </section>
  );
}

export default Trading;

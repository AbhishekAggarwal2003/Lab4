import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  // Mock portfolio data (replace with actual data)
  const portfolioData = [
    { symbol: 'AAPL', quantity: 10, purchasePrice: 150, currentPrice: 160 },
    { symbol: 'GOOGL', quantity: 5, purchasePrice: 2000, currentPrice: 2050 },
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div id="portfolio-list">
        {portfolioData.map((stock, index) => (
          <div key={index} className="stock-item">
            <p><strong>Symbol:</strong> {stock.symbol}</p>
            <p><strong>Quantity:</strong> {stock.quantity}</p>
            <p><strong>Purchase Price:</strong> ${stock.purchasePrice}</p>
            <p><strong>Current Price:</strong> ${stock.currentPrice}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

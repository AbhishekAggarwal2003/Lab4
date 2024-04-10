import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import StockChart from '../components/StockChart';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const { loggedIn } = useAuth();
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    // Fetch stock data when the component mounts
    const fetchStockData = async () => {
      try {
        // Make a GET request to your backend API to fetch stock data
        const response = await axios.get('/api/stock-data');
        // Set the fetched stock data to state
        setStockData(response.data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {loggedIn ? (
        <div>
          <p>Welcome to your TradePlay dashboard! Here, you can view various metrics and information related to your trading activities.</p>
          {/* Render the StockChart component if stock data is available */}
          {stockData && <StockChart data={stockData} />}
        </div>
      ) : (
        <p>Please log in to access your dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;

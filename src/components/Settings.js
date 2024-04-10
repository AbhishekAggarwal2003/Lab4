import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Settings = () => {
  const { user } = useAuth();

  // Handle user settings or preferences here

  return (
    <div>
      <h2>Settings</h2>
      <p>Welcome, {user.username}!</p>
      {/* Include settings options and forms */}
    </div>
  );
};

export default Settings;

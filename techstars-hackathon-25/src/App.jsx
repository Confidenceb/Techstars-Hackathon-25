import React from 'react';
import { Auth } from './Components/Auth'; // Corrected import path

function App() {
  const handleAuthSuccess = (userData) => {
    console.log("Authentication successful!", userData);
    // Implement your project's logic for successful login here
    // e.g., store user token, update application state, redirect to a dashboard
  };

  return (
    <div className="min-h-screen"> {/* You might have a layout for your target app */}
      <Auth onAuthSuccess={handleAuthSuccess} />
    </div>
  );
}

export default App;

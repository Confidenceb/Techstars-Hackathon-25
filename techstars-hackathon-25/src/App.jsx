// import React from 'react';
// import { Auth } from './Components/Auth'; // Corrected import path

// function App() {
//   const handleAuthSuccess = (userData) => {
//     console.log("Authentication successful!", userData);
//     // Implement your project's logic for successful login here
//     // e.g., store user token, update application state, redirect to a dashboard
//   };

//   return (
//     <div className="min-h-screen"> {/* You might have a layout for your target app */}
//       <Auth onAuthSuccess={handleAuthSuccess} />
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Navbar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import { useState } from "react";

function App() {
  // Track which tab is active
  const [activeTab, setActiveTab] = useState("Sell");

  return (
    <div className="app">
      {/* Navbar */}
      <header className="app-header">
        <Navbar />
      </header>

      {/* Main Section */}
      <main className="main-content">
        {/* Sidebar stays fixed */}
        <Sidebar />

        {/* Tabs and Content */}
        <div className="tab-section">
          {/* Tabs */}
          <div className="tabs">
            {["Sell", "Buy", "Swap", "Rent"].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "tab active" : "tab"}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === "Sell" && <h2>Products for Sale</h2>}
            {activeTab === "Buy" && <h2>Buy Products</h2>}
            {activeTab === "Swap" && <h2>Swap Products</h2>}
            {activeTab === "Rent" && <h2>Products for Rent</h2>}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
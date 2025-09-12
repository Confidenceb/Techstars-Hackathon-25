import "./App.css";
import Navbar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import ProductFeed from "./Components/ProductFeed.jsx";
import { useState } from "react";

function App() {
  // Default active tab
  const [activeTab, setActiveTab] = useState("Buy");

  const mockProducts = [
    {
      id: 1,
      title: "Nike Air Max",
      price: 30000,
      priceUnit: "pair",
      image: "https://via.placeholder.com/150",
      description: "Stylish sneakers for casual wear.",
      seller: "John Doe",
      category: "Shoes",
      condition: "New",
      location: "Abuja",
      dateListed: "2024-10-05",
    },
    {
      id: 2,
      title: "HP Laptop 14”",
      price: 180000,
      image: "https://via.placeholder.com/150",
      description: "Intel i5, 8GB RAM, 256GB SSD.",
      seller: "TechMart",
      category: "Electronics",
      condition: "Used - Like New",
      location: "Lagos",
      dateListed: "2024-10-01",
    },
    {
      id: 3,
      title: "School Backpack",
      price: 12000,
      image: "https://via.placeholder.com/150",
      description: "Durable and water-resistant.",
      seller: "Sarah",
      category: "Bags",
      condition: "New",
      location: "Kano",
      dateListed: "2024-09-28",
    },
    {
      id: 4,
      title: "Samsung Smart TV 43”",
      price: 145000,
      image: "https://via.placeholder.com/150",
      description: "4K UHD with HDR and Smart features.",
      seller: "MegaStore",
      category: "Electronics",
      condition: "Used - Good",
      location: "Port Harcourt",
      dateListed: "2024-10-03",
    },
    {
      id: 5,
      title: "Office Chair",
      price: 25000,
      image: "https://via.placeholder.com/150",
      description: "Comfortable swivel chair with cushion.",
      seller: "FurnitureHub",
      category: "Furniture",
      condition: "New",
      location: "Ibadan",
      dateListed: "2024-10-02",
    },
    {
      id: 6,
      title: "Adidas Hoodie",
      price: 18000,
      image: "https://via.placeholder.com/150",
      description: "Warm hoodie for casual outings.",
      seller: "Tunde",
      category: "Clothing",
      condition: "Used - Like New",
      location: "Enugu",
      dateListed: "2024-09-30",
    },
    {
      id: 7,
      title: "Apple AirPods Pro",
      price: 90000,
      image: "https://via.placeholder.com/150",
      description: "Noise-cancelling wireless earbuds.",
      seller: "SoundHub",
      category: "Electronics",
      condition: "New",
      location: "Lagos",
      dateListed: "2024-10-04",
    },
    {
      id: 8,
      title: "Cooking Blender",
      price: 20000,
      image: "https://via.placeholder.com/150",
      description: "Strong blender for smoothies and soups.",
      seller: "KitchenPro",
      category: "Appliances",
      condition: "Used - Good",
      location: "Abuja",
      dateListed: "2024-10-01",
    },
    {
      id: 9,
      title: "Luxury Wristwatch",
      price: 60000,
      image: "https://via.placeholder.com/150",
      description: "Elegant wristwatch for formal occasions.",
      seller: "Daniel",
      category: "Accessories",
      condition: "New",
      location: "Lagos",
      dateListed: "2024-10-05",
    },
  ];

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
            {["Buy", "Swap", "Rent"].map((tab) => (
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
            {activeTab === "Buy" && (
              <>
                {/* <div className="tab-pane">
                  <h2>Buy Products</h2>
                  <button className="list-btn">+ List Your Item</button>
                </div> */}

                <div className="products-grid">
                  <ProductFeed
                    title="Buy"
                    products={mockProducts}
                    showUploadButton={true}
                    onUpload={() => alert("Open Buy Form")}
                  />
                </div>
              </>
            )}
            {activeTab === "Swap" && (
              <div className="tab-pane">
                <h2>Swap Products</h2>
                <button className="list-btn">+ List Item for Swap</button>
              </div>
            )}
            {activeTab === "Rent" && (
              <div className="tab-pane">
                <h2>Products for Rent</h2>
                <button className="list-btn">+ List Your Item</button>
              </div>
            )}
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

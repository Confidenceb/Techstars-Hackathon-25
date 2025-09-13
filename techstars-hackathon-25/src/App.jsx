import "./App.css";
import Navbar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import ProductFeed from "./Components/ProductFeed.jsx";
import Auth from "./Pages/Auth.jsx";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  // Default active tab
  const [activeTab, setActiveTab] = useState("Buy");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const mockProducts = [
    {
      id: 1,
      title: "Nike Air Max",
      price: 30000,
      priceUnit: "pair",
      image:
        "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/84fdcee0-c38c-443c-bfef-2c5148438bd9/NIKE+AIR+MAX+PLUS+UTILITY.png",
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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfwmak3G23fjz3dK9AxTtdHluvp8ZchZ7Sg&s",
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
      image: "https://m.media-amazon.com/images/I/61E-XnqCzVL._UY1000_.jpg",
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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReLsVMxCveR5mvF-o99vL5X1Jtd4HCaf7yDw&s",
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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2fT13CyGc0d1ZyIyvdWDXAhHzBL2IHLmxIg&s",
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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDMv7GTHcpxrt31yOfqeyVzS83giEvcanIQ&s",
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
      image:
        "https://www.istore.com.ng/cdn/shop/files/airpods_pro_2nd_gen_with_usb-c_pdp_image_position-3__en-us_1200x.png?v=1697307583",
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
      image:
        "https://www.baumannliving.com/cdn/shop/products/CookingBlender1.jpg?v=1606905126",
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
      image:
        "https://pictures-nigeria.jijistatic.net/146469333_NjIwLTYyMC0yOTY5Nzk5Y2Vk.webp",
      description: "Elegant wristwatch for formal occasions.",
      seller: "Daniel",
      category: "Accessories",
      condition: "New",
      location: "Lagos",
      dateListed: "2024-10-05",
    },
  ];

  const mockSwapProducts = [
    {
      id: 1,
      title: "iPhone X",
      description:
        "64GB, still in good condition. Looking to swap for a newer Samsung.",
      seller: "Tunde",
      category: "Electronics",
      wants: "Samsung Galaxy S20 or newer",
      image:
        "https://applestore.ng/wp-content/uploads/2022/10/iPhone_x_applestore.ng_.png",
    },
    {
      id: 2,
      title: "Acoustic Guitar",
      description: "Well maintained guitar, comes with a bag.",
      seller: "Chioma",
      category: "Music",
      wants: "Keyboard or Electric Guitar",
      image:
        "https://www.learntoplaymusic.com/blog/wp-content/uploads/2014/10/electric_acoustic_crop.jpg",
    },
    {
      id: 3,
      title: "Office Chair",
      description: "Ergonomic chair, barely used.",
      seller: "Kunle",
      category: "Furniture",
      wants: "Standing Desk",
      image:
        "https://vavafurniture.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-19-at-10.16.00-AM.jpg",
    },
    {
      id: 4,
      title: "PlayStation 4",
      description: "Comes with 2 controllers and 3 games.",
      seller: "David",
      category: "Gaming",
      wants: "Xbox One or Gaming Laptop",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/0604822/1.jpg?7212",
    },
    {
      id: 5,
      title: "Mountain Bike",
      description: "Good for off-road and long rides.",
      seller: "Zainab",
      category: "Sports",
      wants: "Treadmill or Dumbbell Set",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3uYnPo_CBOYSqSiK6a66fnjBWejDiaFL-A&s",
    },
  ];

  // Home component for the main marketplace
  const Home = () => (
    <>
      {/* Main Section */}
      <main className="main-content">
        {/* Sidebar stays fixed */}
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

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
            {/* Hamburger for Sortby mobile */}
            <button
              className="hamburger"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              Sort By
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === "Buy" && (
              <>
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
              <div className="products-grid">
                <ProductFeed
                  title="Swap"
                  products={mockSwapProducts}
                  showUploadButton={true}
                  onUpload={() => alert("Open Buy Form")}
                />
              </div>
            )}
            {activeTab === "Rent" && (
              <div className="products-grid">
                <ProductFeed
                  title="Rent"
                  products={mockSwapProducts}
                  showUploadButton={true}
                  onUpload={() => alert("Open Buy Form")}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );

  return (
    <div className="app">
      {/* Navbar */}
      <header className="app-header">
        <Navbar />
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cart" element={<div>Cart Page - Coming Soon</div>} />
        <Route
          path="/wishlist"
          element={<div>Wishlist Page - Coming Soon</div>}
        />
      </Routes>

      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

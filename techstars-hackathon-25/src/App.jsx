import "./App.css";
import Navbar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import ProductFeed from "./Components/ProductFeed.jsx";
import Auth from "./Pages/Auth.jsx";
import Chemistry from "./Pages/Chemistry";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  // Default active tab
  const [activeTab, setActiveTab] = useState("Buy");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const mockProducts = [
    {
      title: "General Chemistry Textbook",
      price: 4500,
      description: "Essential first-year chemistry textbook in good condition.",
      seller: "Ada • Education",
      condition: "Used",
      location: "Unilag Campus",
      date: "2025-09-10",
      image:
        "http://librarydb.unilag.edu.ng/newgenlibctxt/BookCoverServlet?ISBN=9781260085310&Id=30361&LibId=1",
    },
    {
      title: "Scientific Calculator (Casio fx-991ES)",
      price: 13000,
      description: "Almost new, perfect for MTH101 and PHY101.",
      seller: "Kunle • Math",
      condition: "New",
      location: "Yaba",
      date: "2025-09-08",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYouBl10UWAt5UVS7PWbyitVCaeeFtdNMkMw&s",
    },
    {
      title: "Lab Coat",
      price: 2500,
      description: "White chemistry lab coat, free size, good quality.",
      seller: "Chioma • Science",
      condition: "New",
      location: "Unilag Hostel",
      date: "2025-09-05",
      image:
        "https://greensafetyltdservices.com.ng/wp-content/uploads/2019/01/labcoat.png",
    },
    {
      title: "Safety Goggles",
      price: 1200,
      description: "Protective goggles, anti-fog, suitable for chemistry labs.",
      seller: "Amaka • Chemistry",
      condition: "New",
      location: "Yaba",
      date: "2025-09-03",
      image:
        "https://carrepairsystem.eu/wp-content/uploads/2023/09/IMAGENES-WEB.png",
    },
  ];

  const mockSwapProducts = [
    {
      title: "Physics Textbook",
      description:
        "Well-kept PHY101 textbook. Want to swap for BIO101 or CHM101.",
      wants: "BIO101 or CHM101 Textbook",
      seller: "Seyi • Education",
      location: "Akoka",
      date: "2025-09-07",
      image:
        "https://library.unilag.edu.ng/wp-content/uploads/2021/11/Physics-book.jpg",
    },
    {
      title: "Organic Chemistry Textbook",
      description:
        "Used CHM107 book, want to swap for Calculus (MTH101) or PHY101 book.",
      wants: "MTH101 / PHY101 Textbook",
      seller: "Emeka • Education",
      location: "Akoka",
      date: "2025-09-09",
      image:
        "https://i5.walmartimages.com/seo/Organic-Chemistry-Paperback-9780199270293_21e88a3b-7d5b-4f08-8102-672d8292a514.0af765b63b9a9c1cdfbdd44b07765b9b.jpeg",
    },
  ];

  const mockRentProducts = [
    {
      title: "Microscope",
      description: "Functional microscope, great for lab work.",
      price: 2000,
      duration: "per day",
      seller: "Ibrahim • Science",
      location: "Campus Lab",
      date: "2025-09-02",
      image:
        "https://www.labkafe.com/storage/blog/microscope/care/compound-microscope-student-1.jpg",
    },
    {
      title: "Beaker Set (500ml x3)",
      description:
        "Glass beakers for lab experiments. Rent and return in good condition.",
      price: 800,
      duration: "per practical",
      seller: "Ngozi • Chemistry",
      location: "Unilag Chemistry Dept",
      date: "2025-09-11",
      image: "https://m.media-amazon.com/images/I/61mA0KIWK4L.jpg",
    },
    {
      title: "Test Tube Rack",
      description:
        "Wooden rack for holding 12 test tubes. Available for short-term use.",
      price: 500,
      duration: "per practical",
      seller: "Bola • Chemistry",
      location: "Faculty of Science",
      date: "2025-09-12",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKvJRgaFzk1pvL77gAHdX4hlg3uCLZPcv15A&s",
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
                  products={mockRentProducts}
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
        <Route path="/Chemistry" element={<Chemistry />} />
      </Routes>

      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

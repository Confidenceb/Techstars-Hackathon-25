import React, { useState, useEffect, useRef } from "react";
import "./SideBar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger for mobile */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        Sort By
      </button>

      <aside ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
        <h3 className="sidebar-title">Sort by</h3>

        {/* Category Section */}
        <div className="sidebar-section">
          <h4>Category</h4>
          <ul>
            <li>
              <a href="#">All</a>
            </li>
            <li>
              <a href="#">Dresses</a>
            </li>
            <li>
              <a href="#">Trousers</a>
            </li>
            <li>
              <a href="#">Beach Wear</a>
            </li>
            <li>
              <a href="#">Bags</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
          </ul>
        </div>

        {/* Style Section */}
        <div className="sidebar-section">
          <h4>Style</h4>
          <label>
            <input type="checkbox" /> Trending
          </label>
          <label>
            <input type="checkbox" /> Sales Discount
          </label>
          <label>
            <input type="checkbox" /> On Demand
          </label>
          <label>
            <input type="checkbox" /> Limited
          </label>
        </div>

        {/* Color Section */}
        <div className="sidebar-section">
          <h4>Color</h4>
          <div className="color-options">
            <span className="color-circle red"></span>
            <span className="color-circle yellow"></span>
            <span className="color-circle green"></span>
            <span className="color-circle blue"></span>
            <span className="color-circle purple"></span>
            <span className="color-circle black"></span>
            <span className="color-circle pink"></span>
            <span className="color-circle orange"></span>
            <span className="color-circle cyan"></span>
            <span className="color-circle teal"></span>
            <span className="color-circle brown"></span>
            <span className="color-circle grey"></span>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;

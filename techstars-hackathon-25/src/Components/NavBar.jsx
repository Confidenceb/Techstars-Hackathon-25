import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link className="link" to="/">
          <div className="main-logo">StudyMART</div>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav">
          <ul className="nav-links">
            <li className="nav-link">
              <a href="#">Men</a>
            </li>
            <li className="nav-link">
              <a href="#" className="active">
                Women
              </a>
            </li>
            <li className="nav-link">
              <a href="#">Unisex</a>
            </li>
            <li className="nav-link">
              <Link to="/Chemistry">Chemistry</Link>
            </li>
          </ul>

          {/* Search */}
          <div className="search-container">
            <input type="text" placeholder="Search" />
            <svg
              className="search-icon"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 20.5C15.9706 20.5 20 16.4706 20 11.5C20 6.52944 15.9706 2.5 11 2.5C6.02944 2.5 2 6.52944 2 11.5C2 16.4706 6.02944 20.5 11 20.5Z"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.9299 21.1898C19.4599 22.7898 20.6699 22.9498 21.5999 21.5498C22.4499 20.2698 21.8899 19.2198 20.3499 19.2198C19.2099 19.2098 18.5699 20.0998 18.9299 21.1898Z"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </nav>

        {/* Icons Section */}
        <div className="icons">
          {/* Cart */}
          <Link to="/cart">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6H20L18 14H8L6 6Z"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="20" r="1" fill="#1A1A1A" />
              <circle cx="17" cy="20" r="1" fill="#1A1A1A" />
            </svg>
          </Link>

          {/* Wishlist */}
          <Link to="/wishlist">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21C12 21 5 14.5 5 9.5C5 6.5 7.5 4 10.5 4C12.24 4 13.91 5 14.5 6.5C15.09 5 16.76 4 18.5 4C21.5 4 24 6.5 24 9.5C24 14.5 17 21 17 21H12Z"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Profile/Auth */}
          <Link to="/auth">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12.5C14.7614 12.5 17 10.2614 17 7.5C17 4.73858 14.7614 2.5 12 2.5C9.23858 2.5 7 4.73858 7 7.5C7 10.2614 9.23858 12.5 12 12.5Z"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5901 22.5C20.5901 18.63 16.7402 15.5 12.0002 15.5C7.26015 15.5 3.41016 18.63 3.41016 22.5"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6H21"
              stroke="#1A1A1A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H21"
              stroke="#1A1A1A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H21"
              stroke="#1A1A1A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="mobile-menu-backdrop"
            onClick={toggleMobileMenu}
          ></div>
          <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
            <nav>
              <ul>
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#">Women</a>
                </li>
                <li>
                  <a href="#">Unisex</a>
                </li>
                <li>
                  <Link to="/Chemistry">Chemistry</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/wishlist">Wishlist</Link>
                </li>
                <li>
                  <Link to="/auth">Sign In</Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

export default Navbar;

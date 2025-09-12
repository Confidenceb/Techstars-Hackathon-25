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
        <Link className="link" to="/">
          <div className="main-logo">ChemHack</div>
        </Link>
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
          </ul>
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
        <div className="icons">
          <Link to="/checkout">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.62 21.31C12.28 21.43 11.72 21.43 11.38 21.31C8.48 20.32 2 16.19 2 9.18998C2 6.09998 4.49 3.59998 7.56 3.59998C9.38 3.59998 10.99 4.47998 12 5.83998C13.01 4.47998 14.63 3.59998 16.44 3.59998C19.51 3.59998 22 6.09998 22 9.18998C22 16.19 15.52 20.32 12.62 21.31Z"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link to="/profile">
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
          <Link to="/cart">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2.5H3.74001C4.82001 2.5 5.67 3.43 5.58 4.5L4.75 14.46C4.61 16.09 5.89999 17.49 7.53999 17.49H18.19C19.63 17.49 20.89 16.31 21 14.88L21.54 7.38C21.66 5.72 20.4 4.37 18.73 4.37H5.82001"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.25 22.5C16.9404 22.5 17.5 21.9404 17.5 21.25C17.5 20.5596 16.9404 20 16.25 20C15.5596 20 15 20.5596 15 21.25C15 21.9404 15.5596 22.5 16.25 22.5Z"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 22.5C8.94036 22.5 9.5 21.9404 9.5 21.25C9.5 20.5596 8.94036 20 8.25 20C7.55964 20 7 20.5596 7 21.25C7 21.9404 7.55964 22.5 8.25 22.5Z"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 8.5H21"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
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
                  <Link to="/favorites" onClick={toggleMobileMenu}>
                    Favorites
                  </Link>
                </li>
                <li>
                  <Link to="/signin" onClick={toggleMobileMenu}>
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/signup" onClick={toggleMobileMenu}>
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/cart" onClick={toggleMobileMenu}>
                    My Cart
                  </Link>
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
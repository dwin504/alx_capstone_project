import React from "react";
import "./Header.css";

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="app-header">
      <nav className="header-nav">
        {/* ✅ Logo instead of text */}
        <div className="app-logo">
          <img src="/logo.png" alt="Ed Player Logo" className="logo-img" />
          <span className="logo-text">Ed Player</span>
        </div>

        <div className="nav-links">
          <button
            className={`nav-link ${currentPage === "home" ? "nav-link--active" : ""}`}
            onClick={() => setCurrentPage("home")}
          >
            Home
          </button>
          <button
            className={`nav-link ${currentPage === "library" ? "nav-link--active" : ""}`}
            onClick={() => setCurrentPage("library")}
          >
            Your Library
          </button>
          <button
            className={`nav-link ${currentPage === "playlists" ? "nav-link--active" : ""}`}
            onClick={() => setCurrentPage("playlists")}
          >
            Playlists
          </button>
        </div>

        <div className="user-section">
          <div className="user-info">
            <img
              src="/user-avatar.png"
              alt="User profile"
              className="user-avatar"
            />
            <span className="user-name">Username</span>
            <span className="dropdown-arrow">⌄</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

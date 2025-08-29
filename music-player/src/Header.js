import React, { useState } from 'react';
import './Header.css';

const Header = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
      setActiveTab('search');
    }
  };

  return (
    <header className="app-header">
      <nav className="header-nav">
        <div className="nav-links">
          <button 
            className={`nav-link ${activeTab === 'home' ? 'nav-link--active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${activeTab === 'search' ? 'nav-link--active' : ''}`}
            onClick={() => setActiveTab('search')}
          >
            Search
          </button>
          <button 
            className={`nav-link ${activeTab === 'library' ? 'nav-link--active' : ''}`}
            onClick={() => setActiveTab('library')}
          >
            Your Library
          </button>
        </div>

        <form onSubmit={handleSearchSubmit} className="header-search">
          <input 
            type="text" 
            placeholder="Search for songs, artists, or albums..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-icon-btn">
            🔍
          </button>
        </form>

        <div className="user-section">
          <div className="user-info">
            <img 
              src="/user-avatar.jpg" 
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
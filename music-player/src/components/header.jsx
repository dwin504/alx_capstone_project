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
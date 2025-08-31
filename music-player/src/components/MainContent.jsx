import React, { useState } from 'react';
import { useSearch } from '../context/SearchContext.jsx';
import TrackList from './TrackList.jsx';
import './MainContent.css';
const MainContent = ({ onTrackSelect }) => {
  const { searchResults, popularTracks, isLoading, error, performSearch } = useSearch();
  const [localQuery, setLocalQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    performSearch(localQuery);
  };

  const handleInputChange = (e) => {
    setLocalQuery(e.target.value);
  };
   if (searchResults.length > 0 || isLoading || error) {
    return (
      <div className="main-content-wrapper">
        <main className="main-content">
          <div className="content-header">
            <h1 className="page-title">Music Player</h1>
            
            <form onSubmit={handleSearch} className="search-box">
              <input 
                type="text" 
                placeholder="Search for songs, artists, or albums..." 
                className="search-input"
                value={localQuery}
                onChange={handleInputChange}
              />
              <button 
                type="submit" 
                className="search-btn"
                disabled={isLoading}
              >
                {isLoading ? 'Searching...' : 'Search'}
              </button>
            </form>
          </div>
            <div className="content-body">
            {error && (
              <div className="error-message">
                Error: {error}
              </div>
            )}

            {isLoading ? (
              <div className="loading-state">
                <div className="loading-spinner"></div>
                <p>Searching for music...</p>
              </div>
            ) : (
              <TrackList 
                tracks={searchResults}
                title={localQuery ? `Search Results for "${localQuery}"` : 'Search Results'}
                showNumber={false}
                onTrackSelect={onTrackSelect}
              />
            )}
          </div>
        </main>
      </div>
    );
  }
    if (popularTracks.length > 0) {
    return (
      <div className="main-content-wrapper">
        <main className="main-content">
          <div className="content-header">
            <h1 className="page-title">Music Player</h1>
            
            <form onSubmit={handleSearch} className="search-box">
              <input 
                type="text" 
                placeholder="Search for songs, artists, or albums..." 
                className="search-input"
                value={localQuery}
                onChange={handleInputChange}
              />
              <button 
                type="submit" 
                className="search-btn"
              ></button>
              </form>
          </div>


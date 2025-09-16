import React from "react";
import { useSearch } from "../context/SearchContext.jsx";
import "./Sidebar.css";

const Sidebar = () => {
  const { popularArtists, performSearch } = useSearch();

  const handleArtistClick = (artistName) => {
    performSearch(artistName); // 🔥 search this artist’s tracks
  };

  return (
    <aside className="sidebar">
      {/* Example navigation section */}
      <div className="sidebar-section">
        <h3 className="sidebar-title">Navigation</h3>
        <ul className="sidebar-list">
          <li className="sidebar-item">🏠 Home</li>
          <li className="sidebar-item">📚 Your Library</li>
        </ul>
      </div>

      {/* ✅ Popular Artists Section */}
      <div className="sidebar-section">
        <h3 className="sidebar-title">Popular Artists</h3>
        <ul className="sidebar-list">
          {popularArtists.length > 0 ? (
            popularArtists.slice(0, 6).map((artist) => (
              <li
                key={artist.id}
                className="sidebar-item"
                onClick={() => handleArtistClick(artist.name)}
              >
                <img
                  src={artist.picture}
                  alt={artist.name}
                  className="artist-avatar"
                />
                <span className="artist-name">{artist.name}</span>
              </li>
            ))
          ) : (
            <li className="sidebar-item">Loading artists...</li>
          )}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

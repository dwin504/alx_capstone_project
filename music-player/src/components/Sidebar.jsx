import React from "react";
import { useSearch } from "../context/SearchContext.jsx";
import "./Sidebar.css";

const Sidebar = () => {
  const { popularArtists, performSearch } = useSearch();

  const handleArtistClick = (artistName) => {
    performSearch(artistName);
  };

  const handleGenreClick = (genre) => {
    performSearch(genre); // search tracks in this genre
  };

  return (
    <aside className="sidebar">
      {/* ✅ Genres Section */}
      <div className="sidebar-section">
        <h3 className="sidebar-title">Genres</h3>
        <ul className="sidebar-list">
          {["Pop", "Hip Hop", "Rock", "Afrobeat", "Jazz", "Electronic"].map(
            (genre) => (
              <li
                key={genre}
                className="sidebar-item"
                onClick={() => handleGenreClick(genre)}
              >
                <span className="artist-name">{genre}</span>
              </li>
            )
          )}
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

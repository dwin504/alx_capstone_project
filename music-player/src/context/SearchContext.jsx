import React, { createContext, useContext, useState, useEffect } from "react";
import {
  searchTracks,
  getPopularTracks,
  getPopularArtists, // ✅ new
} from "../services/deezerApi.js";

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [popularTracks, setPopularTracks] = useState([]);
  const [popularArtists, setPopularArtists] = useState([]); // ✅ new
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    loadPopularTracks();
    loadPopularArtists(); // ✅ fetch artists too
  }, []);

  const loadPopularTracks = async () => {
    try {
      setIsLoading(true);
      const tracks = await getPopularTracks();
      setPopularTracks(tracks);
    } catch (err) {
      console.error("Music Player failed to load popular tracks:", err);
      setError("Failed to load popular tracks");
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ new: load popular artists
  const loadPopularArtists = async () => {
    try {
      const artists = await getPopularArtists();
      setPopularArtists(artists);
    } catch (err) {
      console.error("Music Player failed to load popular artists:", err);
    }
  };

  const performSearch = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);
    setSearchQuery(query);

    try {
      const tracks = await searchTracks(query);
      setSearchResults(tracks);
    } catch (err) {
      setError(err.message);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearSearch = () => {
    setSearchResults([]);
    setSearchQuery("");
    setError(null);
  };

  const value = {
    searchResults,
    popularTracks,
    popularArtists, // ✅ exposed to Sidebar
    isLoading,
    error,
    searchQuery,
    performSearch,
    clearSearch,
    loadPopularTracks,
    loadPopularArtists,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

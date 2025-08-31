import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('music-player-favorites')) || [];
    const storedPlaylist = JSON.parse(localStorage.getItem('music-player-playlist')) || [];
    setFavorites(storedFavorites);
    setPlaylist(storedPlaylist);
  }, []);

  useEffect(() => {
    localStorage.setItem('music-player-favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('music-player-playlist', JSON.stringify(playlist));
  }, [playlist]);

  const addToFavorites = (track) => {
    if (!favorites.some(fav => fav.id === track.id)) {
      setFavorites(prev => [...prev, track]);
    }
  };

  const removeFromFavorites = (trackId) => {
    setFavorites(prev => prev.filter(track => track.id !== trackId));
  };

  const addToPlaylist = (track) => {
    setPlaylist(prev => [...prev, track]);
  };

  const removeFromPlaylist = (trackId) => {
    setPlaylist(prev => prev.filter(track => track.id !== trackId));
  };

  const playNextTrack = () => {
    if (playlist.length > 0) {
      const nextTrack = playlist[0];
      removeFromPlaylist(nextTrack.id);
      setCurrentTrack(nextTrack);
      return true;
    }
    return false;
  };

  const value = {
    favorites,
    playlist,
    currentTrack,
    isPlaying,
    setCurrentTrack,
    setIsPlaying,
    addToFavorites,
    removeFromFavorites,
    addToPlaylist,
    removeFromPlaylist,
    playNextTrack
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
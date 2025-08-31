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

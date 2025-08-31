import React, { useState } from 'react';
import './Header.css';

const Header = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
      
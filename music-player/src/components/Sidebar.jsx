import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h2 className="section-title">Explore new</h2>
        <div className="explore-list">
          <div className="explore-item">
            <span className="artist-name">Zak Abel</span>
            <span className="track-name">Love Song</span>
          </div>
          <div className="explore-item">
            <span className="artist-name">Kendrik Lamar</span>
            <span className="track-name">Kombucha Burps</span>
          </div>
          <div className="explore-item">
            <span className="artist-name">Avicii It. Derulo</span>
            <span className="track-name">On The Regular</span>
          </div>
          <div className="explore-item">
            <span className="artist-name">Kaytranada</span>
            <span className="track-name">El Sambroso</span>
          </div>
          <div className="explore-item">
            <span className="artist-name">ESTA</span>
            <span className="track-name">Mask Off Soul Flip</span>
          </div>
          <div className="explore-item">
            <span className="artist-name">Dragonette</span>
            <span className="track-name">Tokyo Night</span>
          </div>
        </div>
      </div>
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
       <div className="sidebar-section">
        <h2 className="section-title">Popular</h2>
        <div className="popular-list">
          <div className="popular-item">
            <span className="track-number">1</span>
            <div className="track-info">
              <span className="track-name">Love Song</span>
              <span className="track-duration">3:23</span>
            </div>
            <span className="track-more">---</span>
          </div>
          <div className="popular-item">
            <span className="track-number">2</span>
            <div className="track-info">
              <span className="track-name">Kombucha Burps</span>
              <span className="track-duration">3:36</span>
            </div>
            <span className="track-more">---</span>
          </div>
          <div className="popular-item">
            <span className="track-number">3</span>
            <div className="track-info">
              <span className="track-name">On The Regular</span>
              <span className="track-duration">2:39</span>
            </div>
            <span className="track-more">---</span>
          </div>
          <div className="popular-item">
            <span className="track-number">4</span>
            <div className="track-info">
              <span className="track-name">El Sambroso</span>
              <span className="track-duration">3:26</span>
            </div>
            <span className="track-more">---</span>
          </div>
          <div className="popular-item">
            <span className="track-number">5</span>
            <div className="track-info">
              <span className="track-name">Mask Off Soul Flip</span>
              <span className="track-duration">6:29</span>
            </div>
            <span className="track-more">---</span>
          </div>
        </div>
      </div>

      <div className="sidebar-section">
        <h2 className="section-title">Mood</h2>
        <div className="mood-list">
          <div className="mood-item">
            <span className="mood-genre">Ghetto Rap</span>
            <span className="mood-track">Twerk Baby</span>
          </div>
          <div className="mood-item">
            <span className="mood-genre">Party Breaker</span>
            <span className="mood-track">Valentine Vibe</span>
          </div>
        </div>
      </div>

      <button className="create-playlist-btn">
        Create playlist
      </button>
    </aside>
  );
};

export default Sidebar;
import React from "react";
import { useApp } from "../context/AppContext.jsx";
import "./PlayerControls.css";  // ← Fixed the import path

const PlayerControls = ({ currentTrack, isPlaying, onPlay, onPause }) => {
  const { playNextTrack } = useApp();

  if (!currentTrack) {
    return null;
  }

  return (
    <footer className="player-controls">
      <div className="now-playing">
        <img 
          src={currentTrack.albumCover} 
          alt="Album cover" 
          className="now-playing-art"
        />
        <div className="now-playing-info">
          <div className="now-playing-name">{currentTrack.name}</div>
          <div className="now-playing-artist">{currentTrack.artist}</div>
        </div>
      </div>

      <div className="playback-controls">
        <div className="playback-buttons">
          <button className="control-btn" title="Shuffle">
            🔀
          </button>
          <button className="control-btn" title="Previous">
            ⏮
          </button>
          <button 
            className="play-pause-btn"
            onClick={isPlaying ? onPause : onPlay}
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button 
            className="control-btn" 
            onClick={playNextTrack}
            title="Next"
          >
            ⏭
          </button>
          <button className="control-btn" title="Repeat">
            🔁
          </button>
        </div>
      </div>

      <div className="volume-control">
        <button className="control-btn" title="Volume">
          🔊
        </button>
      </div>
    </footer>
  );
};

export default PlayerControls;
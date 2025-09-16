import React, { useRef, useEffect } from "react";
import "./PlayerControls.css";

const PlayerControls = ({ currentTrack, isPlaying, onPlay, onPause }) => {
  const audioRef = useRef(null);

  // When track changes, load the new preview and autoplay
  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(err => console.log("Playback error:", err));
      }
    }
  }, [currentTrack]);

  // Handle play/pause toggle
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(err => console.log("Playback error:", err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  if (!currentTrack) {
    return (
      <div className="player-controls">
        <div className="now-playing">
          <div className="now-playing-info">
            <div className="now-playing-name">No track selected</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="player-controls">
      <div className="now-playing">
        <img
          src={currentTrack.albumCover}
          alt={currentTrack.name}
          className="now-playing-art"
        />
        <div className="now-playing-info">
          <div className="now-playing-name">{currentTrack.name}</div>
          <div className="now-playing-artist">{currentTrack.artist}</div>
        </div>
      </div>

      <div className="playback-controls">
        <div className="playback-buttons">
          <button className="control-btn">⏮️</button>
          <button
            className="play-pause-btn"
            onClick={isPlaying ? onPause : onPlay}
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>
          <button className="control-btn">⏭️</button>
        </div>
      </div>

      {/* The audio element */}
      <audio ref={audioRef}>
        <source src={currentTrack.previewUrl} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default PlayerControls;

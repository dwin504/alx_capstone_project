import React from 'react';
import './TrackList.css';

const TrackList = ({ tracks, title, showNumber = false, onTrackSelect }) => {
  const handleTrackClick = (track) => {
    if (onTrackSelect) {
      onTrackSelect(track);
    }
  };

  if (!tracks || tracks.length === 0) {
    return (
      <div className="tracklist-section">
        {title && <h3 className="tracklist-title">{title}</h3>}
        <p className="no-tracks">No tracks found. Try searching for something!</p>
      </div>
    );
  }

  return (
    <div className="tracklist-section">
      {title && <h3 className="tracklist-title">{title}</h3>}
      
      <div className="tracklist">
        {tracks.map((track, index) => (
          <div 
            key={track.id} 
            className="track-item"
            onClick={() => handleTrackClick(track)}
          >
            {showNumber && (
              <span className="track-number">
                {index + 1}
              </span>
            )}
            
            <img 
              src={track.albumCover} 
              alt={`Album cover for ${track.albumName}`}
              className="track-album-cover"
            />
            
            <div className="track-info">
              <p className="track-name">{track.name}</p>
              <p className="track-artist">{track.artist}</p>
            </div>
            
            <div className="track-details">
              <span className="track-duration">{track.duration}</span>
              <button 
                className="track-play-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleTrackClick(track);
                }}
              >
                ▶
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackList;
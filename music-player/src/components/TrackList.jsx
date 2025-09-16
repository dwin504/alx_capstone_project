import React from "react";
import "./TrackList.css";

const TrackList = ({ tracks, title, onTrackSelect }) => {
  return (
    <div className="tracklist">
      <h2>{title}</h2>
      <ul>
        {tracks.map((track) => (
          <li
            key={track.id}
            className="track-item"
            onClick={() => onTrackSelect && onTrackSelect(track)}
          >
            <img src={track.albumCover} alt={track.name} className="track-cover" />
            <div className="track-info">
              <div className="track-name">{track.name}</div>
              <div className="track-artist">{track.artist}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;

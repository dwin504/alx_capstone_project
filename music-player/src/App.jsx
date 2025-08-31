import React from 'react';
import { AppProvider } from './context/AppContext.jsx';
import { SearchProvider } from './context/SearchContext.jsx';
import Sidebar from './components/Sidebar.jsx';
import MainContent from './components/MainContent.jsx';
import PlayerControls from './components/PlayerControls.jsx';
import Header from './components/Header.jsx';
import './App.css';

function App() {
  const [currentTrack, setCurrentTrack] = React.useState(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handleSearch = (query) => {
    console.log('Searching for:', query);
  };

  const handleTrackSelect = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  return (
    <AppProvider>
      <SearchProvider>
        <div className="app">
          <Sidebar />
          <div className="main-content-wrapper">
            <Header onSearch={handleSearch} />
            <MainContent onTrackSelect={handleTrackSelect} />
          </div>
          <PlayerControls 
            currentTrack={currentTrack} 
            isPlaying={isPlaying}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        </div>
      </SearchProvider>
    </AppProvider>
  );
}

export default App;
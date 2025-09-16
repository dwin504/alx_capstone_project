import React from "react";
import { AppProvider } from "./context/AppContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import Sidebar from "./components/Sidebar.jsx";
import MainContent from "./components/MainContent.jsx";
import PlayerControls from "./components/PlayerControls.jsx";
import Header from "./components/Header.jsx";
import "./App.css";

function App() {
  const [currentTrack, setCurrentTrack] = React.useState(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState("home"); // ✅ page state

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
            {/* ✅ Pass page state to Header */}
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

            {/* ✅ Show page content based on active tab */}
            {currentPage === "home" && (
              <MainContent onTrackSelect={handleTrackSelect} />
            )}
            {currentPage === "library" && (
              <div className="page-content">
                <h2>Your Library</h2>
                <p>Here you will see your saved songs, playlists, and albums.</p>
              </div>
            )}
            {currentPage === "playlists" && (
              <div className="page-content">
                <h2>Playlists</h2>
                <p>Browse your playlists here.</p>
              </div>
            )}
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

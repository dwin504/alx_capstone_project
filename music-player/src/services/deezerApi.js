// 🔧 Add proxy for testing (CORS bypass)
const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const API_BASE_URL = "https://api.deezer.com";

export const searchTracks = async (query) => {
  try {
    const response = await fetch(
      `${PROXY_URL}${API_BASE_URL}/search?q=${encodeURIComponent(query)}`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    if (!data.data || data.data.length === 0) {
      throw new Error("No tracks found for this search");
    }

    return data.data.map((track) => ({
      id: track.id,
      name: track.title,
      artist: track.artist.name,
      duration: formatDuration(track.duration),
      albumCover: track.album.cover_medium,
      albumName: track.album.title,
      previewUrl: track.preview,
      artistId: track.artist.id,
      albumId: track.album.id,
    }));
  } catch (error) {
    console.error("Music Player search error:", error);
    throw new Error(error.message || "Failed to search tracks");
  }
};

export const getPopularTracks = async () => {
  try {
    const response = await fetch(
      `${PROXY_URL}${API_BASE_URL}/chart/0/tracks?limit=20`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    return data.data.map((track) => ({
      id: track.id,
      name: track.title,
      artist: track.artist.name,
      duration: formatDuration(track.duration),
      albumCover: track.album.cover_medium,
      albumName: track.album.title,
      previewUrl: track.preview,
      artistId: track.artist.id,
      albumId: track.album.id,
    }));
  } catch (error) {
    console.error("Music Player error fetching popular tracks:", error);
    throw new Error("Failed to load popular tracks");
  }
};

// 🔥 NEW: Fetch popular artists
export const getPopularArtists = async () => {
  try {
    const response = await fetch(
      `${PROXY_URL}${API_BASE_URL}/chart/0/artists?limit=10`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    return data.data.map((artist) => ({
      id: artist.id,
      name: artist.name,
      picture: artist.picture_medium,
    }));
  } catch (error) {
    console.error("Music Player error fetching popular artists:", error);
    throw new Error("Failed to load popular artists");
  }
};

const formatDuration = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

export const parseDuration = (durationString) => {
  const [minutes, seconds] = durationString.split(":").map(Number);
  return minutes * 60 + seconds;
};

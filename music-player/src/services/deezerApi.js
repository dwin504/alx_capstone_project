const API_BASE_URL = 'https://api.deezer.com';

export const searchTracks = async (query) => {
  try {
    console.log('Searching Music Player for:', query);
    
    const response = await fetch(`${API_BASE_URL}/search?q=${encodeURIComponent(query)}`);
    
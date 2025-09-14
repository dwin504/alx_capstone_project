# 🎵 Harmony Finder - Music Discovery App

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.3-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-green)
![Deezer API](https://img.shields.io/badge/Deezer-API-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

A modern, responsive music player application that allows users to discover, search, and play music tracks from a vast library. Built with React and designed for seamless music exploration.

![Harmony Finder Screenshot](https://via.placeholder.com/800x400/121212/1db954?text=Harmony+Finder+Music+Player)

## ✨ Features

### 🎶 Core Functionality
- **Music Search**: Real-time search through thousands of tracks
- **Track Playback**: Play 30-second previews of songs
- **Popular Tracks**: Discover trending music
- **Playlist Management**: Create and manage personal playlists
- **Favorites System**: Save your favorite tracks

### 🎨 User Experience
- **Dark Theme**: Easy-on-the-eyes dark interface
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Instant Search**: Live results as you type
- **Sleek Player**: Beautiful music player controls
- **Progress Tracking**: Visual progress bars and time display

### ⚡ Technical Features
- **Fast Performance**: Built with Vite for lightning-fast development
- **Modern React**: Uses latest React hooks and context API
- **Local Storage**: Saves your preferences and playlists locally
- **API Integration**: Connects to music APIs for real data
- **PWA Ready**: Can be installed as a mobile app

## 🚀 Live Demo

Experience Harmony Finder live:  
**[https://harmony-finder.vercel.app](https://harmony-finder.vercel.app)**

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 7.1.3
- **Styling**: Tailwind CSS + Custom CSS
- **API**: Deezer Music API
- **Deployment**: Vercel
- **State Management**: React Context API + Hooks
- **Icons**: Modern emoji-based icons

## 📦 Installation

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/harmony-finder.git
   cd harmony-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🎯 Usage

### Searching for Music
1. Type in the search bar at the top
2. View instant results as you type
3. Click any track to play it
4. Use play/pause controls in the player

### Managing Music
- **Add to Favorites**: Click the heart icon on any track
- **Create Playlist**: Use "Create playlist" button in sidebar
- **Play Next**: Queue system for continuous playback

### Navigation
- **Home**: Discover popular tracks
- **Search**: Find specific songs or artists
- **Your Library**: Access your saved content

## 🏗️ Project Structure

```
harmony-finder/
├── public/
│   ├── index.html
│   ├── vite.svg
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── MainContent.jsx
│   │   ├── TrackList.jsx
│   │   └── PlayerControls.jsx
│   ├── context/
│   │   ├── AppContext.jsx
│   │   └── SearchContext.jsx
│   ├── services/
│   │   └── deezerApi.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── vercel.json
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file for API configuration:

```env
VITE_APP_NAME=Harmony Finder
VITE_DEEZER_API_URL=https://api.deezer.com
```

### Customization
- Modify colors in `src/index.css` CSS variables
- Update music source in `src/services/deezerApi.js`
- Customize UI components in respective JSX files

## 🌟 Key Components

### AppContext
Global state management for:
- User preferences and settings
- Playlist and favorites storage
- Player state and current track

### SearchContext
Handles all search-related functionality:
- API integration and data fetching
- Search results management
- Loading states and error handling

### Responsive Design
- Mobile-first approach using CSS Grid and Flexbox
- Adaptive sidebar navigation
- Touch-friendly player controls

## 🚀 Deployment

### Vercel Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

### Netlify Deployment
```bash
# Build project
npm run build

# Deploy to Netlify
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
```bash
# Build and deploy
npm run build
# Upload dist folder to GitHub Pages
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Use descriptive component and variable names
- Ensure responsive design works on all screen sizes
- Test all functionality before submitting PR

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- **Deezer API** for providing music data
- **Vite Team** for excellent build tooling
- **React Community** for continuous improvements
- **ALX Program** for the learning opportunity

## 📞 Support

If you have any questions or issues:

- Create an [Issue](https://github.com/your-username/harmony-finder/issues)
- Email: your-email@example.com
- Twitter: [@yourhandle](https://twitter.com/yourhandle)

## 🎉 Future Enhancements

- [ ] User authentication system
- [ ] Social features (sharing playlists)
- [ ] Advanced audio controls
- [ ] Lyrics integration
- [ ] Offline playback capability
- [ ] Podcast and audiobook support

---

**Built with ❤️ for music lovers everywhere**

*Discover your next favorite song with Harmony Finder* 🎵✨
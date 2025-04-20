# Retro Games Library

This project is a responsive retro game library built with **React** and **TypeScript**. It uses the Noroff `old-games` API to fetch and display game data. Users can browse games, view detailed information, filter by genre, search, sort, and mark games as favourites.

## 🔗 Live Demo

[View deployed project on Netlify](https://game-shop-v1.netlify.app/)

## 🛠️ Technologies Used

- React (with Vite)
- TypeScript
- React Router
- Tailwind CSS
- React Toastify
- LocalStorage API

## ✅ Features

- **Home Page**  
  Fetches and displays all games in a responsive grid with:

  - Image
  - Name
  - Release year
  - Genre tags

- **Search & Sort**

  - Search games by name
  - Sort by name or release year

- **Game Details Page**

  - Fetches game data by ID
  - Displays description, year, genres and image

- **Genres Page**

  - Lists all genres
  - Clicking a genre filters the games

- **Favorites**

  - Games can be marked/unmarked as favourites
  - Stored in `localStorage`
  - Favourite state shown with heart icon
  - Reusable `useFavorites` hook used throughout

- **Toast Notifications**

  - Displays confirmation when adding/removing favourites

- **Responsive Design**
  - Optimized for mobile, tablet, and desktop

## 📆 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/retro-games-library.git
cd retro-games-library
```

2. Install dependencies:

```bash
npm install
```

3. Run the project locally:

```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── api/            // API calls
├── components/     // UI components
├── hooks/          // Custom hooks (e.g. useFavorites)
├── pages/          // Route views (Home, GameDetails, Genres)
├── types/          // TypeScript interfaces
└── utils/          // Local storage logic
```

## 📄 API Reference

- Endpoint: `https://api.noroff.dev/api/v1/old-games`
- Docs: [https://docs.noroff.dev/docs/v2/basic/old-games](https://docs.noroff.dev/docs/v2/basic/old-games)

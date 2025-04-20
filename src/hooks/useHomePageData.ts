import { useState } from "react";
import { Game } from "../types/game";
import { useFavorites } from "./useFavorites";
import { useGames } from "./useGame";

export function useHomePageData() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const { favorites, toggleFavorite, isFavorite, isInitialized } = useFavorites();
  const { games, loading, error } = useGames(); 

  const filteredGames = games
    .filter((game: Game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((game: Game) =>
      showOnlyFavorites ? favorites.includes(game.id) : true
    )
    .sort((a: Game, b: Game) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "year") return parseInt(a.released) - parseInt(b.released);
      return 0;
    });

  return {
    loading,
    error,
    filteredGames,
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    showOnlyFavorites,
    setShowOnlyFavorites,
    isFavorite,
    toggleFavorite,
    isInitialized,
  };
}


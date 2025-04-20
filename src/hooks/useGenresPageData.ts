import { useLocation, useNavigate } from "react-router-dom";
import { useFavorites } from "./useFavorites";
import { useGames } from "./useGame";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function useGenresPageData() {
  const { games, loading } = useGames();
  const { isFavorite, toggleFavorite, isInitialized } = useFavorites();
  const query = useQuery();
  const navigate = useNavigate();
  const genre = query.get("genre");

  const filteredGames = genre
    ? games.filter((game) => game.genre.includes(genre))
    : games;

  return {
    loading,
    isInitialized,
    navigate,
    filteredGames,
    isFavorite,
    toggleFavorite,
  };
}
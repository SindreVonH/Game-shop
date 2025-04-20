import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchGameById } from "../api/games";
import { Game } from "../types/game";
import { useFavorites } from "./useFavorites";

export function useGameDetailsData() {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isFavorite, toggleFavorite, isInitialized } = useFavorites();

  useEffect(() => {
    async function loadGame() {
      try {
        if (!id) throw new Error("Ugyldig ID");
        const gameData = await fetchGameById(Number(id));
        setGame(gameData);
      } catch (err) {
        console.error(err);
        setError("Kunne ikke laste spillet.");
      } finally {
        setLoading(false);
      }
    }

    loadGame();
  }, [id]);

  return {
    game,
    loading,
    error,
    isFavorite,
    toggleFavorite,
    isInitialized,
  };
}


import { useEffect, useState } from "react";
import { loadFavorites, saveFavorites } from "../utils/favoriteStorage";

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const stored = loadFavorites();
    setFavorites(stored);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      saveFavorites(favorites);
    }
  }, [favorites, isInitialized]);

  const toggleFavorite = (id: number) => {
    const current = loadFavorites(); 
    const updated = current.includes(id)
      ? current.filter((favId) => favId !== id)
      : [...current, id];

    setFavorites(updated);
    saveFavorites(updated);
  };

  const isFavorite = (id: number) => favorites.includes(id);

  return { favorites, toggleFavorite, isFavorite, isInitialized };
}

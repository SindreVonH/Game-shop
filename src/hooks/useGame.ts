import { useEffect, useState } from "react";
import { fetchAllGames } from "../api/games";
import { Game } from "../types/game";

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchAllGames();
        setGames(data);
      } catch (err) {
        console.error("Feil ved henting av spill:", err);
        setError("Kunne ikke hente spill. Prøv igjen senere.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { games, loading, error };
}

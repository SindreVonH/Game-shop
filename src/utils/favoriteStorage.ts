const STORAGE_KEY = "favoriteGames";

export function loadFavorites(): number[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function saveFavorites(favorites: number[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error("Kunne ikke lagre favoritter", error);
  }
}




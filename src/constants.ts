export const API_BASE = "https://api.noroff.dev/api/v1";
export const API_GAMES = `${API_BASE}/old-games`;
export const API_GAME_BY_ID = (id: number) => `${API_GAMES}/${id}`;
export const API_RANDOM_GAME = `${API_GAMES}/random`;
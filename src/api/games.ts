import { API_GAMES } from "../constants";
import { API_GAME_BY_ID } from "../constants";
import { Game } from "../types/game";

export async function fetchAllGames(): Promise<Game[]> {
  try {
    const res = await fetch(API_GAMES);
    const json = await res.json();

    if (!res.ok) {
      throw new Error("Kunne ikke hente spill.");
    }

    if (!Array.isArray(json)) {
      throw new Error("Data er ikke en liste.");
    }

    return json; 
  } catch (error) {
    console.error("Feil ved henting av spill:", error);
    throw error;
  }
}

export async function fetchGameById(id: number): Promise<Game> {
  try {
    const res = await fetch(API_GAME_BY_ID(id));
    if (!res.ok) throw new Error("Kunne ikke hente spillet");
    const json = await res.json();
    return json;
  } catch (error) {
    console.error("Feil ved henting av enkeltspill:", error);
    throw error;
  }
}



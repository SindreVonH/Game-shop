import { Game } from "../types/game";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { RetroToast } from "./RetroToast";

type Props = {
  game: Game;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

const genreColors: Record<string, string> = {
  Action: "border-pink-500 text-pink-400",
  Puzzle: "border-blue-500 text-blue-400",
  Simulation: "border-teal-500 text-teal-400",
  Strategy: "border-green-500 text-green-400",
  "Role-Playing (RPG)": "border-purple-500 text-purple-400",
  "Racing / Driving": "border-yellow-500 text-yellow-400",
  default: "border-cyan-500 text-cyan-400",
};

export default function GameCard({ game, isFavorite, onToggleFavorite }: Props) {
  const color = genreColors[game.genre[0]] || genreColors.default;

  const handleFavoriteClick = () => {
    onToggleFavorite();

    toast(
      <RetroToast
        message={
          !isFavorite ? "Added to favorites" : "Removed from favorites"
        }
        success={!isFavorite}
      />,
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "dark",
      }
    );
  };

  return (
    <article
      className={`relative p-4 rounded-xl border ${color} bg-[#111827] shadow-md flex flex-col justify-between h-full`}
    >
      <Link to={`/game/${game.id}`} className="space-y-4">
        <h2 className={`text-2xl font-bold ${color}`}>{game.name}</h2>

        <img
          src={game.image}
          alt={`Bilde av ${game.name}`}
          onError={(e) =>
            ((e.target as HTMLImageElement).src =
              "https://via.placeholder.com/400x250?text=Bildet+mangler")
          }
          className="rounded-md w-full aspect-video object-cover"
        />

        <p className="text-sm text-zinc-300">
          <strong className="text-zinc-400">Genre:</strong>{" "}
          <span className="text-white font-medium">
            {game.genre.join(", ")}
          </span>
        </p>
      </Link>

      <div className="flex justify-between items-center mt-6 px-1">
        <p className={`text-lg font-semibold ${color}`}>{game.released}</p>

        <button
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? "Fjern fra favoritter" : "Legg til i favoritter"}
          title={isFavorite ? "Fjern fra favoritter" : "Legg til i favoritter"}
          className="hover:scale-110 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isFavorite ? "#f43f5e" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#f43f5e"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.5c0 3.78-3.4 6.86-8.55 11.54L12 
              21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
              5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 
              4.5 2.09C13.09 4.01 14.76 3 16.5 
              3 19.58 3 22 5.42 22 8.5z"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}






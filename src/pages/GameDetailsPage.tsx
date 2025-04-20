import { useNavigate } from "react-router-dom";
import { useGameDetailsData } from "../hooks/useGameDetailsData";
import FavoriteButton from "../components/FavoriteButton";
import { toast } from "react-toastify";
import { RetroToast } from "../components/RetroToast";

const genreColors: Record<string, string> = {
  Action: "border-pink-500 text-pink-400",
  Puzzle: "border-blue-500 text-blue-400",
  Simulation: "border-teal-500 text-teal-400",
  Strategy: "border-green-500 text-green-400",
  "Role-Playing (RPG)": "border-purple-500 text-purple-400",
  "Racing / Driving": "border-yellow-500 text-yellow-400",
  Educational: "border-cyan-500 text-cyan-400",
  default: "border-cyan-500 text-cyan-400",
};

export default function GameDetailsPage() {
  const {
    game,
    loading,
    error,
    isFavorite,
    toggleFavorite,
    isInitialized,
  } = useGameDetailsData();

  const navigate = useNavigate();

  if (loading || !isInitialized)
    return <p className="text-center text-white">Laster spillet...</p>;

  if (error || !game)
    return (
      <p className="text-center text-red-400">
        {error || "Fant ikke spillet."}
      </p>
    );

  const color = genreColors[game.genre[0]] || genreColors.default;

  const handleFavoriteToggle = () => {
    toggleFavorite(game.id);
    toast(
      <RetroToast
        message={
          isFavorite(game.id)
            ? "Removed from favorites"
            : "Added to favorites"
        }
        success={!isFavorite(game.id)}
      />
    );
  };

  return (
    <main className="min-h-screen bg-[#0e062d] text-white px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1
          onClick={() => navigate("/")}
          className="text-6xl font-extrabold text-center mb-10 bg-gradient-to-r from-pink-500 via-orange-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-lg tracking-tight cursor-pointer"
        >
          RETRO <br /> GAMES
        </h1>

        <article
          className={`relative border rounded-xl p-6 shadow-md ${color} bg-[#111827]`}
        >
          <img
            src={game.image}
            alt={game.name}
            className="w-full rounded-md object-cover aspect-video mb-6"
          />

          <h2 className={`text-3xl font-bold mb-2 ${color}`}>{game.name}</h2>
          <p className={`text-lg font-semibold mb-4 ${color}`}>
            {game.released}
          </p>

          <p className="text-zinc-300 mb-4">{game.description}</p>
          <p>
            <strong className="text-zinc-400">Sjangre:</strong>{" "}
            <span className="text-white font-medium">
              {game.genre.join(", ")}
            </span>
          </p>

          <FavoriteButton
            isFavorite={isFavorite(game.id)}
            onToggle={handleFavoriteToggle}
            className="absolute bottom-4 right-4"
          />
        </article>
      </div>
    </main>
  );
}



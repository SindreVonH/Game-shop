import { useGenresPageData } from "../hooks/useGenresPageData";
import GenreButtonGrid from "../components/GameButtonGrid";
import GameCard from "../components/GameCard";

export default function GenresPage() {
  const {
    loading,
    isInitialized,
    navigate,
    filteredGames,
    isFavorite,
    toggleFavorite,
  } = useGenresPageData();

  if (loading || !isInitialized) {
    return <p className="text-center text-white">Laster spill...</p>;
  }

  return (
    <main className="min-h-screen bg-[#0e062d] text-white px-4 py-10">
      <section className="max-w-7xl mx-auto">
        <h1
          onClick={() => navigate("/")}
          className="text-6xl font-extrabold text-center mb-10 bg-gradient-to-r from-pink-500 via-orange-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-lg tracking-tight cursor-pointer"
        >
          RETRO <br /> GAMES
        </h1>

        <GenreButtonGrid />

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGames.length === 0 ? (
            <p className="text-center col-span-full text-zinc-400">
              Ingen spill funnet for denne sjangeren.
            </p>
          ) : (
            filteredGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                isFavorite={isFavorite(game.id)}
                onToggleFavorite={() => toggleFavorite(game.id)}
              />
            ))
          )}
        </section>
      </section>
    </main>
  );
}


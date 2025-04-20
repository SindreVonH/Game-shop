import GenreButtonGrid from "../components/GamebuttonGrid";
import GameCard from "../components/GameCard";
import { useHomePageData } from "../hooks/useHomePageData";

export default function HomePage() {
  const {
    loading,
    error,
    filteredGames,
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    showOnlyFavorites,
    setShowOnlyFavorites,
    isFavorite,
    toggleFavorite,
    isInitialized,
  } = useHomePageData();

  if (loading || !isInitialized) {
    return <p className="text-center text-white">Laster spill...</p>;
  }

  if (error) {
    return <p className="text-center text-red-400">{error}</p>;
  }

  return (
    <main className="min-h-screen bg-[#0e062d] text-white px-4 py-10">
      <div className="max-w-7xl mx-auto space-y-10">

        <header>
          <h1 className="text-6xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-orange-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-lg tracking-tight">
            RETRO <br /> GAMES
          </h1>
        </header>

        <nav aria-label="Sjanger-navigasjon">
          <GenreButtonGrid />
        </nav>

        <section
          aria-label="Filter og sortering"
          className="flex flex-wrap justify-center gap-4"
        >
          <input
            type="search"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-zinc-800 border border-cyan-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Søk etter spill"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-zinc-800 border border-cyan-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Sorter spill"
          >
            <option value="name">Sort by: A–Z</option>
            <option value="year">Sort by: Year</option>
          </select>

          <button
            onClick={() => setShowOnlyFavorites((prev) => !prev)}
            className="px-4 py-2 rounded-md border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-semibold transition"
            aria-pressed={showOnlyFavorites}
            aria-label="Bytt visning av favoritter"
          >
            {showOnlyFavorites ? "Show All" : "★ Favorite"}
          </button>
        </section>

        <section
          aria-label="Liste over spill"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredGames.length === 0 ? (
            <p className="col-span-full text-center text-zinc-400">
              Ingen spill funnet.
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
      </div>
    </main>
  );
}

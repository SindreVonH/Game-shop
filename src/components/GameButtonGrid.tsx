import GenreButton from "./GenreButton";
import { genreButtons } from "../utils/genres";

export default function GenreButtonGrid() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {genreButtons.map((genre) => (
        <GenreButton
          key={genre.label}
          label={genre.label}
          emoji={genre.emoji}
          color={genre.color}
        />
      ))}
    </div>
  );
}
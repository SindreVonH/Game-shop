import { genreButtons } from "../utils/genres";
import GenreImageCard from "./GenreImageCard";

export default function GenreButtonGrid() {
  return (
    <div className="flex gap-3 overflow-x-auto sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 sm:gap-4 pb-2">
      {genreButtons.map((genre) => (
        <GenreImageCard
          key={genre.label}
          label={genre.label}
          image={genre.image}
          isSelected={false} // eller true hvis du vil vise valgt sjanger senere
        />
      ))}
    </div>
  );
}

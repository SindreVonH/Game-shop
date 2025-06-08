import { useNavigate } from "react-router-dom";
import { genreClassMap } from "./genreClasses";

type Props = {
  label: string;
  image: string;
  isSelected: boolean;
};

export default function GenreImageCard({
  label,
  image,
  isSelected,
}: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/genres?genre=${encodeURIComponent(label)}`);
  };

  const borderColor = genreClassMap[label] ?? "border-white";

  return (
    <button
      onClick={handleClick}
      className={`relative w-32 sm:w-36 h-20 sm:h-24 rounded-lg overflow-hidden transition-transform hover:scale-105 border-2 ${borderColor}`}
      aria-pressed={isSelected}
    >
      <img
        src={image}
        alt={label}
        className="w-full h-full object-cover opacity-80"
      />
      <span className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-medium text-sm text-center px-1">
        {label}
      </span>
    </button>
  );
}




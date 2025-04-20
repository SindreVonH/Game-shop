type FavoriteButtonProps = {
  isFavorite: boolean;
  onToggle: () => void;
  className?: string;
};

export default function FavoriteButton({ isFavorite, onToggle, className = "" }: FavoriteButtonProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={isFavorite ? "Fjern fra favoritter" : "Legg til i favoritter"}
      title={isFavorite ? "Fjern fra favoritter" : "Legg til i favoritter"}
      className={`hover:scale-110 transition-transform ${className}`}
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
  );
}

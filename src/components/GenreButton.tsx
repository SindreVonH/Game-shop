import { useNavigate } from "react-router-dom";

type GenreButtonProps = {
  label: string;
  color: string;
  emoji: string;
  onClick?: () => void; 
};

export default function GenreButton({
  label,
  color,
  emoji,
  onClick,
}: GenreButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); 
    } else {
      navigate(`/genres?genre=${encodeURIComponent(label)}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex flex-col items-center justify-center w-24 h-24 border-2 rounded-md ${color} text-white hover:scale-105 transition`}
    >
      <span className="text-2xl">{emoji}</span>
      <span className="text-xs mt-1 text-center">{label}</span>
    </button>
  );
}
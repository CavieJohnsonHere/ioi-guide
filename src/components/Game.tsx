import EightQueens from "./games/EightQueens";
import FourQueens from "./games/FourQueens";
import InteractiveGraph from "./games/InteractiveGraph";

export default function Game({ game }: { game: string }) {
  switch (game) {
    case "8Queens": return <EightQueens />;
    case "4Queens": return <FourQueens />;
    case "InteractiveGraph": return <InteractiveGraph />;
    default: return <div className="text-red-100">Game not found</div>;
  }
}

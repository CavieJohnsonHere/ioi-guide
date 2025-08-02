import EightQueens from "./games/EightQueens";
import FourQueens from "./games/FourQueens";
import Pie from "./games/Pie";

export default function Game({ game }: { game: string }) {
  switch (game) {
    case "8Queens": return <EightQueens />;
    case "4Queens": return <FourQueens />;
    // case "InteractiveGraph": return <InteractiveGraph />;
    case "Pie": return <Pie />;
    default: return <div className="text-red-100">Game not found</div>;
  }
}

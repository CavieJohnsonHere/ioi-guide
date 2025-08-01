import { useEffect, useState } from "react";
import Button from "../Button";

export default function FourQueens() {
  const [board, setBoard] = useState<number[][]>([]);

  useEffect(() => {
    setBoard(Array.from({ length: 4 }, () => Array(4).fill(0)));
  }, []);

  const handleClick = (row: number, col: number) => {
    const newBoard = [...board];
    newBoard[row][col] = newBoard[row][col] === 1 ? 0 : 1;
    setBoard(newBoard);
  };

  const isAllowed = (row: number, col: number) => {
    // Check column
    for (let i = 0; i < 4; i++) {
      if (i !== row && board[i][col] === 1) return false;
    }
    // Check row
    for (let j = 0; j < 4; j++) {
      if (j !== col && board[row][j] === 1) return false;
    }
    // Check diagonals
    for (let i = -7; i <= 7; i++) {
      if (i === 0) continue;
      // Top-left to bottom-right
      if (
        row + i >= 0 &&
        row + i < 4 &&
        col + i >= 0 &&
        col + i < 4 &&
        board[row + i][col + i] === 1
      ) {
        return false;
      }
      // Top-right to bottom-left
      if (
        row + i >= 0 &&
        row + i < 4 &&
        col - i >= 0 &&
        col - i < 4 &&
        board[row + i][col - i] === 1
      ) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="flex flex-col gap-2 items-center my-10 dir-ltr">
      <div className="flex gap-5">
      <Button
          onClick={() => {
            setBoard(Array.from({ length: 4 }, () => Array(4).fill(2)));
            setTimeout(
              () => setBoard(Array.from({ length: 4 }, () => Array(4).fill(0))),
              300
            );
          }}
          className="size-10"
          icon
        >
          cached
        </Button>
      </div>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2 w-fit">
          {row.map((col, colIndex) => (
            <div
              key={colIndex}
              className={`size-10 ${
                col === 2
                  ? "bg-gray-800"
                  : isAllowed(rowIndex, colIndex)
                  ? "bg-pink-800 hover:bg-pink-700 cursor-pointer"
                  : "bg-gray-800 hover:bg-gray-700 cursor-not-allowed"
              } ${rowIndex === 0 && colIndex === 0 ? "rounded-tl-lg" : ""} ${
                rowIndex === 0 && colIndex === 3 ? "rounded-tr-lg" : ""
              } ${rowIndex === 3 && colIndex === 0 ? "rounded-bl-lg" : ""} ${
                rowIndex === 3 && colIndex === 3 ? "rounded-br-lg" : ""
              } transition text-gray-200 text-3xl flex items-center justify-center select-none`}
              onClick={() => isAllowed(rowIndex, colIndex) && handleClick(rowIndex, colIndex)}
            >
              {col === 1 ? "♕" : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

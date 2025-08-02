import { useState } from "react";
import Button from "../Button";

type Part = {
  baseClassName: string;
  number: number;
};

export default function Pie() {
  const [parts, setParts] = useState<[Part, Part, Part, Part, Part, Part]>([
    {
      baseClassName: "!fill-pink-800 stroke-5 transition-all stroke-stone-900",
      number: 0,
    },
    {
      baseClassName: "!fill-pink-800 stroke-5 transition-all stroke-stone-900",
      number: 0,
    },
    {
      baseClassName: "!fill-pink-800 stroke-5 transition-all stroke-stone-900",
      number: 0,
    },
    {
      baseClassName: "!fill-pink-800 stroke-5 transition-all stroke-stone-900",
      number: 1,
    },
    {
      baseClassName: "!fill-pink-800 stroke-5 transition-all stroke-stone-900",
      number: 0,
    },
    {
      baseClassName: "!fill-pink-800 stroke-5 transition-all stroke-stone-900",
      number: 1,
    },
  ]);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Define the path data for each segment
  const segmentPaths = [
    "M 0 0 L 86.6025 50 A 100 100 0 0 1 0 100 Z", // Segment 1
    "M 0 0 L 0 100 A 100 100 0 0 1 -86.6025 50 Z", // Segment 2
    "M 0 0 L -86.6025 50 A 100 100 0 0 1 -86.6025 -50 Z", // Segment 3
    "M 0 0 L -86.6025 -50 A 100 100 0 0 1 0 -100 Z", // Segment 4
    "M 0 0 L 0 -100 A 100 100 0 0 1 86.6025 -50 Z", // Segment 5
    "M 0 0 L 86.6025 -50 A 100 100 0 0 1 86.6025 50 Z", // Segment 6
  ];

  // Define the text positions for each segment
  const textPositions = [
    { x: 32.5, y: 56.3 }, // Text 1
    { x: -32.5, y: 56.3 }, // Text 2
    { x: -65, y: 0 }, // Text 3
    { x: -32.5, y: -56.3 }, // Text 4
    { x: 32.5, y: -56.3 }, // Text 5
    { x: 65, y: 0 }, // Text 6
  ];

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (clickedIndex: number, remove?: boolean) => {
    setParts((prevParts) => {
      const newParts = [...prevParts]; // Create a shallow copy of the array

      // Increment/Decrement the clicked part's number
      newParts[clickedIndex] = {
        ...newParts[clickedIndex],
        number: remove
          ? newParts[clickedIndex].number - 1
          : newParts[clickedIndex].number + 1,
      };

      // Increment/Decrement the next part's number, handling wrap-around
      const nextIndex = (clickedIndex + 1) % newParts.length;
      newParts[nextIndex] = {
        ...newParts[nextIndex],
        number: remove
          ? newParts[nextIndex].number - 1
          : newParts[nextIndex].number + 1,
      };

      return newParts as [Part, Part, Part, Part, Part, Part];
    });
  };

  return (
    <div className="flex flex-col items-center **:cursor-pointer **:fill-pink-200 **:select-none">
      <Button
        icon
        className="size-10"
        onClick={() => {
          const newParts = parts.map((v, i) => {
            return {
              baseClassName:
                "!fill-pink-800 stroke-5 transition-all stroke-stone-900",
              number: i == 3 || i == 5 ? 1 : 0,
            };
          });

          setParts(newParts as [Part, Part, Part, Part, Part, Part]);
        }}
      >
        cached
      </Button>
      <svg width="400" height="400" viewBox="-110 -110 220 220">
        {parts.map((part, index) => {
          const nextIndex = (index - 1) % parts.length;
          const isHovered =
            hoveredIndex === index || hoveredIndex === nextIndex;

          const partClassName = `${part.baseClassName} ${
            isHovered ? "scale-105" : ""
          }`;

          return (
            <g
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
              onContextMenu={(e) => {
                e.preventDefault();
                handleClick(index, true);
              }}
            >
              <path d={segmentPaths[index]} className={partClassName} />
              <text x={textPositions[index].x} y={textPositions[index].y} className="text-center">
                {part.number}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

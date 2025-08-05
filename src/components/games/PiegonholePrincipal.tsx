import { useEffect, useState } from "react";
import Button from "../Button";

const MAX_HOLES = 6;

const pigeonEmojis = [
  "🕊️", "🐦", "🦜", "🐧", "🐤", "🐣", "🪿", "🦢", "🦩", "🦃",
  "🐓", "🐥", "🦉", "🦆", "🪽", "🪶", "🐔", "🎉", "🍕", "🎈"
];

export default function PigeonholePrincipal() {
  const [numPigeons, setNumPigeons] = useState(8);
  const [assignments, setAssignments] = useState<number[]>([]);
  const [leftOut, setLeftOut] = useState<number[]>([]);

  const shufflePigeons = () => {
    const pigeons = Array.from({ length: numPigeons }, (_, i) => i);
    const shuffled = [...pigeons].sort(() => Math.random() - 0.5);
    const assigned: number[] = [];
    const extras: number[] = [];

    for (let i = 0; i < pigeons.length; i++) {
      if (i < MAX_HOLES) {
        assigned.push(shuffled[i]);
      } else {
        extras.push(shuffled[i]);
      }
    }

    const holeAssignments: number[] = Array(numPigeons).fill(-1);
    assigned.forEach((pigeon, i) => {
      holeAssignments[pigeon] = i;
    });

    setAssignments(holeAssignments);
    setLeftOut(extras);
  };

  useEffect(() => {
    shufflePigeons();
  }, [numPigeons]);

  const getEmoji = (index: number) => pigeonEmojis[index % pigeonEmojis.length];

  return (
    <div className="my-10 space-y-5">
      <div className="flex items-center gap-4">
        <Button
          icon
          className="size-10"
          onClick={() => setNumPigeons((n) => Math.max(1, n - 1))}
        >
          remove
        </Button>
        <span className="text-lg text-gray-200">Pigeons: {numPigeons}</span>
        <Button
          icon
          className="size-10"
          onClick={() => setNumPigeons((n) => n + 1)}
        >
          add
        </Button>
        <Button onClick={shufflePigeons}>Shuffle</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 max-w-md">
        {Array.from({ length: MAX_HOLES }).map((_, holeIndex) => {
          const pigeonIndex = assignments.findIndex((a) => a === holeIndex);
          return (
            <div
              key={holeIndex}
              className="rounded-2xl aspect-square flex items-center justify-center bg-pink-700"
            >
              {pigeonIndex !== -1 && (
                <div className="text-2xl">{getEmoji(pigeonIndex)}</div>
              )}
            </div>
          );
        })}
      </div>

      {leftOut.length > 0 && (
        <div>
          <h3 className="text-lg font-medium mt-6 text-gray-300">Left Out Pigeons</h3>
          <div className="flex gap-2 flex-wrap mt-2">
            {leftOut.map((pigeon) => (
              <div key={pigeon} className="text-2xl">
                {getEmoji(pigeon)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

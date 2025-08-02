export default function Pie() {
  return (
    <div>
      <svg width="400" height="400" viewBox="-100 -100 200 200">
        <path d="M 0 0 L 86.6 50 A 100 100 0 0 0 0 100 Z" fill="#FF5733" />
        <text x="43.3" y="75">
          1
        </text>

        <path d="M 0 0 L 0 100 A 100 100 0 0 0 -86.6 50 Z" fill="#33FF57" />
        <text x="-43.3" y="75">
          2
        </text>

        <path d="M 0 0 L -86.6 50 A 100 100 0 0 0 -86.6 -50 Z" fill="#3357FF" />
        <text x="-75" y="0">
          3
        </text>

        <path d="M 0 0 L -86.6 -50 A 100 100 0 0 0 0 -100 Z" fill="#FF33A8" />
        <text x="-43.3" y="-75">
          4
        </text>

        <path d="M 0 0 L 0 -100 A 100 100 0 0 0 86.6 -50 Z" fill="#A833FF" />
        <text x="43.3" y="-75">
          5
        </text>

        <path d="M 0 0 L 86.6 -50 A 100 100 0 0 0 86.6 50 Z" fill="#33FFF0" />
        <text x="75" y="0">
          6
        </text>
      </svg>
    </div>
  );
}

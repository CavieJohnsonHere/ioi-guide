import L from "@/localization/L";
import Button from "./Button";
import { useEffect, useState } from "react";

export default function HomePage() {
  const balls = [
    {
      top: Math.random() * (window.innerHeight - 64),
      left: Math.random() * (window.innerWidth - 320),
      bg: "bg-pink-500",
      id: 0,
    },
    {
      top: Math.random() * (window.innerHeight - 64),
      left: Math.random() * (window.innerWidth - 320),
      bg: "bg-green-500",
      id: 1,
    },
    {
      top: Math.random() * (window.innerHeight - 64),
      left: Math.random() * (window.innerWidth - 320),
      bg: "bg-yellow-500",
      id: 2,
    },
  ];

  return (
    <div className="py-10 relative">
      {/* firefox's blur has a max radius so it looks terrible */}
      {!navigator.userAgent.toLowerCase().includes("firefox") &&
        balls.map((v) => (
          <div
            className={`absolute size-20 ${v.bg}`}
            key={v.id}
            style={{
              left: v.left,
              top: v.top,
              filter: `blur(${300 * Math.max(Math.random(), 0.5)}px)`,
            }}
          />
        ))}

      <h1 className="text-5xl font-bold flex gap-3 justify-center dir-ltr">
        <img src="/assets/logo.svg" alt="" className="size-20" />
        <div className="leading-20 bg-clip-text text-white">.guide</div>
      </h1>

      <div className="text-gray-300 w-128 text-center mx-auto mt-5 text-xl">
        <L>hp-desc</L>
      </div>

      <div className="mt-8 flex justify-center gap-5">
        <Button link="/guide/getting-started">
          <L>hp-start-learning</L>
        </Button>
        <Button secondary>
          <L>hp-see-whats-up</L>
        </Button>
      </div>
    </div>
  );
}

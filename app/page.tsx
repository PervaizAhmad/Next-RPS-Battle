"use client";

import ScoreBoard from "@/components/scoreBoard";
import { useState, useEffect } from "react";

export enum GameMoves {
  ROCK = 0,
  PAPER = 1,
  SCISSOR = 2,
}

export default function Home() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  
  const resetScore = (): void => {
    setPlayerScore(0);
    setComputerScore(0);
  };

  return (
    <main className="w-[500px]">
      <ScoreBoard playerScore={playerScore} computerScore={computerScore} />
      <button
        className="border-gray-200 rounded border float-right mt-4 mb-8 p-2"
        onClick={resetScore}
      >
        RESET SCORE
      </button>
    </main>
  );
}

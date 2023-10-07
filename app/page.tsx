"use client";

import Moves from "@/components/moves";
import Results from "@/components/results";
import ScoreBoard from "@/components/scoreBoard";
import { useEffect, useState } from "react";

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [moves, setMoves] = useState<{
    player: number;
    computer: number;
    win: boolean;
  }>({ player: 0, computer: 0, win: false });

  const [isFirstMount, setIsFirstMount] = useState(true); // ref to store first mount flag

  useEffect(() => {
    if (isFirstMount) {
      // skip if component is mounted for the first time
      setIsFirstMount(false);
    } else {
      setShowResults(true);
    }
    // eslint-disable-next-line
  }, [moves]);

  const resetScore = (): void => {
    setPlayerScore(0);
    setComputerScore(0);
  };

  const calculateResults = (playerMove: number): void => {
    // generate a random move
    const computerMove: number = Math.floor(Math.random() * 3);

    // check if player won
    let win = false;
    switch (playerMove) {
      case 0:
        if (computerMove === 2) win = true;
        break;
      case 1:
        if (computerMove === 0) win = true;
        break;
      case 2:
        if (computerMove === 1) win = true;
        break;
    }

    if (win) {
      setPlayerScore(playerScore + 1);
    } else if (playerMove !== computerMove) {
      setComputerScore(computerScore + 1);
    }

    // update state --> useEffect will be triggered
    setMoves({ player: playerMove, computer: computerMove, win });
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
      {showResults ? (
        <Results
          moves={{
            player: moves.player,
            computer: moves.computer,
          }}
          win={moves.win}
          draw={moves.player === moves.computer}
          playAgain={() => setShowResults(false)}
        />
      ) : (
        <Moves makeMove={calculateResults} />
      )}
    </main>
  );
}

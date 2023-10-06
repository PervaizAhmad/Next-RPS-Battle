import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";
import { GameMoves } from "@/app/page";

export default function Results({
  moves,
  win,
  draw,
  playAgain
}: {
  moves: { player: GameMoves; computer: GameMoves };
  win: boolean;
  draw: boolean;
  playAgain: () => void;
}) {
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <div className="grid grid-cols-3 gap-5 pt-10">
        <div className="grid place-items-center col-start-1 rounded-full bg-slate-200 cursor-pointer hover:bg-red-300 ease-out duration-300">
          <div className="grid place-items-center w-[150px] rounded-full aspect-square border-[10px] border-red-500">
            <FaHandRock size="4rem" color="#1F3556" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center col-start-2">
          <h1 className="text-2xl font-bold">
            {draw ? "IT'S A DRAW" : win ? "YOU WIN" : "YOU LOOSE"}
          </h1>
          <button
            className="bg-gray-200 text-[#1F3556] rounded border float-right mt-4 mb-8 p-2"
            onClick={playAgain}
          >
            PLAY AGAIN
          </button>
        </div>

        <div className="grid place-items-center col-start-3 rounded-full bg-slate-200 cursor-pointer hover:bg-green-300 ease-out duration-300">
          <div className="grid place-items-center w-[150px] rounded-full aspect-square border-[10px] border-green-500">
            <FaHandPaper size="4rem" color="#1F3556" />
          </div>
        </div>
      </div>
    </div>
  );
}

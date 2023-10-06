import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";
import { GameMoves } from "@/app/page";

export default function Moves({
  makeMove,
}: {
  makeMove: (sign: GameMoves) => void;
}) {
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <h1 className="text-2xl font-bold">MAKE YOUR MOVE</h1>
      <div className="grid grid-cols-3 pt-10">
        <div className="grid place-items-center col-start-2 rounded-full bg-slate-200 cursor-pointer hover:bg-blue-300 ease-out duration-300" onClick={() => makeMove(GameMoves.SCISSOR)}>
          <div className="grid place-items-center w-[150px] rounded-full aspect-square border-[10px] border-blue-500">
            <FaHandScissors size="4rem" color="#1F3556" />
          </div>
        </div>

        <div className="grid place-items-center col-start-2 rounded-full">
          <div className="w-[100px] aspect-square">{/* Empty Spacer */}</div>
        </div>

        <div className="grid place-items-center col-start-1 rounded-full bg-slate-200 cursor-pointer hover:bg-red-300 ease-out duration-300" onClick={() => makeMove(GameMoves.ROCK)}>
          <div className="grid place-items-center w-[150px] rounded-full aspect-square border-[10px] border-red-500">
            <FaHandRock size="4rem" color="#1F3556" />
          </div>
        </div>

        <div className="grid place-items-center col-start-3 rounded-full bg-slate-200 cursor-pointer hover:bg-green-300 ease-out duration-300" onClick={() => makeMove(GameMoves.PAPER)}>
          <div className="grid place-items-center w-[150px] rounded-full aspect-square border-[10px] border-green-500">
            <FaHandPaper size="4rem" color="#1F3556" />
          </div>
        </div>
      </div>
    </div>
  );
}

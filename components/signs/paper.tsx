import { GameMoves } from "@/app/page";
import { FaHandPaper } from "react-icons/fa";

export default function Paper({
  colStart,
  makeMove,
  selectable = true,
}: {
  colStart: "1" | "2" | "3";
  makeMove?: (sign: GameMoves) => void;
  selectable?: boolean;
}) {
  return (
    <div
      className={`grid place-items-center col-start-${colStart} rounded-full bg-slate-200 ${
        selectable && "cursor-pointer hover:bg-green-300 ease-out duration-300"
      }`}
      onClick={makeMove ? () => makeMove(GameMoves.PAPER) : () => {}}
    >
      <div className="grid place-items-center w-[150px] rounded-full aspect-square border-[10px] border-green-500">
        <FaHandPaper size="4rem" color="#1F3556" />
      </div>
    </div>
  );
}

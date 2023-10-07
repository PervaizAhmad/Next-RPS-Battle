import { FaHandScissors } from "react-icons/fa";

export default function Scissor({
  colStart,
  makeMove,
  selectable = true,
}: {
  colStart: "1" | "2" | "3";
  makeMove: (sign: number) => void;
  selectable?: boolean;
}) {
  return (
    <div
      className={`grid place-items-center col-start-${colStart} rounded-full bg-slate-200 ${
        selectable && "cursor-pointer hover:bg-blue-300 ease-out duration-300"
      }`}
      onClick={() => makeMove(2)}
    >
      <div className="grid place-items-center w-[150px] rounded-full aspect-square border-[10px] border-blue-500">
        <FaHandScissors size="4rem" color="#1F3556" />
      </div>
    </div>
  );
}

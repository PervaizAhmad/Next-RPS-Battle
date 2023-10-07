import Paper from "./signs/paper";
import Rock from "./signs/rock";
import Scissor from "./signs/scissor";

export default function Moves({
  makeMove,
}: {
  makeMove: (sign: number) => void;
}) {
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <h1 className="text-2xl font-bold">MAKE YOUR MOVE</h1>
      <div className="grid grid-cols-3 pt-10">
        <div className="grid place-items-center col-start-1 rounded-full">
          <div className="w-[100px] aspect-square">{/* Empty Spacer */}</div>
        </div>
        <Scissor colStart="2" makeMove={makeMove} />

        <div className="grid place-items-center col-start-3 rounded-full">
          <div className="w-[100px] aspect-square">{/* Empty Spacer */}</div>
        </div>

        <div className="grid place-items-center col-start-1 rounded-full">
          <div className="w-[100px] aspect-square">{/* Empty Spacer */}</div>
        </div>
        <div className="grid place-items-center col-start-2 rounded-full">
          <div className="w-[100px] aspect-square">{/* Empty Spacer */}</div>
        </div>
        <div className="grid place-items-center col-start-3 rounded-full">
          <div className="w-[100px] aspect-square">{/* Empty Spacer */}</div>
        </div>

        <Rock colStart="1" makeMove={makeMove} />
        <div className="grid place-items-center col-start-2 rounded-full">
          <div className="w-[100px] aspect-square">{/* Empty Spacer */}</div>
        </div>
        <Paper colStart="3" makeMove={makeMove} />
      </div>
    </div>
  );
}

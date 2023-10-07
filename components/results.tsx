import Paper from "./signs/paper";
import Rock from "./signs/rock";
import Scissor from "./signs/scissor";

export default function Results({
  moves,
  win,
  draw,
  playAgain,
}: {
  moves: { player: number; computer: number };
  win: boolean;
  draw: boolean;
  playAgain: () => void;
}) {
  const getSign = (colStart: "1" | "2" | "3", sign?: number) => {
    switch (sign) {
      case 0:
        return <Rock colStart={colStart} selectable={false} makeMove={(sign: number) => {}} />;
      case 1:
        return <Paper colStart={colStart} selectable={false} makeMove={(sign: number) => {}} />;
      case 2:
        return <Scissor colStart={colStart} selectable={false} makeMove={(sign: number) => {}} />;
    }
  };

  return (
    <div className="flex justify-center items-center flex-col w-full">
      <div className="grid grid-cols-3 gap-5 pt-10">
        {getSign("1", moves.player)}

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

        {getSign("3", moves.computer)}
      </div>
    </div>
  );
}

export default function ScoreBoard({
  playerScore = 0,
  computerScore = 0,
}: {
  playerScore?: number;
  computerScore?: number;
}) {
  return (
    <div className="border-2 border-sky-100 rounded p-3">
      <div className="flex justify-between items-center">
        <div>
          <p>ROCK</p>
          <p>PAPER</p>
          <p>SCISSORS</p>
        </div>
        <div className="flex flex-row gap-3">
          <div className="w-[100px] h-[100px] bg-slate-200 rounded p-3 text-xs text-[#1F3556] text-center font-bold">
            PLAYER
            <p className="text-5xl pt-2">{playerScore}</p>
          </div>
          <div className="w-[100px] h-[100px] bg-slate-200 rounded p-3 text-xs text-[#1F3556] text-center font-bold">
            COMPUTER
            <p className="text-5xl pt-2">{computerScore}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

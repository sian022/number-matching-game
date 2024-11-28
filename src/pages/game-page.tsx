import { GameBoard } from "@/components/game-board";
import { Button } from "@/components/ui/button";
import { useGameLogic } from "@/hooks/use-game-logic";
import useNumberStore from "@/stores/number";

const GamePage = () => {
  const maxNumber = useNumberStore((state) => state.maxNumber);
  const { cards, turns, resetGame, handleCardClick } = useGameLogic({
    maxNumber,
    onGameComplete: () => {
      alert("Game complete!");
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen p-12">
      <div className="flex w-full gap-4">
        <span className="text-xl font-bold">Turns: {turns} </span>
        <Button onClick={resetGame}>Restart game</Button>
      </div>

      <GameBoard cards={cards} onCardClick={handleCardClick} />
    </div>
  );
};

export default GamePage;

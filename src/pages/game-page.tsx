import { GameBoard } from "@/components/game-board";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGameLogic } from "@/hooks/use-game-logic";
import { useNumberStore } from "@/stores/number";
import { Link, Navigate } from "react-router-dom";

const GamePage = () => {
  const maxNumber = useNumberStore((state) => state.maxNumber);
  const { cards, turns, resetGame, handleCardClick } = useGameLogic({
    maxNumber,
    onGameComplete: () => {
      alert("Game complete!");
    },
  });

  if (!maxNumber) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col items-center h-screen max-w-screen-xl gap-6 m-auto p-8">
      <div className="flex w-full gap-4 items-center justify-between">
        <span className="text-xl font-bold">Turns: {turns}</span>

        <div className="flex gap-4">
          <Link to="/">
            <Button variant="outline">Back to Welcome</Button>
          </Link>

          <Button onClick={resetGame}>Restart Game</Button>
        </div>
      </div>

      <Card className="flex-1 w-full flex justify-center items-center p-4">
        <GameBoard cards={cards} onCardClick={handleCardClick} />
      </Card>
    </div>
  );
};

export { GamePage };

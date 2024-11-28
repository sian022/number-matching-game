import CongratsDialog from "@/components/congrats-dialog";
import { GameBoard } from "@/components/game-board";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGameLogic } from "@/hooks/use-game-logic";
import { useNumberStore } from "@/stores/number";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const GamePage = () => {
  const navigate = useNavigate();
  const maxNumber = useNumberStore((state) => state.maxNumber);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { cards, turns, resetGame, handleCardClick } = useGameLogic({
    maxNumber,
    onGameComplete: () => setIsDialogOpen(true),
  });

  if (!maxNumber) {
    return <Navigate to="/" />;
  }

  const onClose = () => setIsDialogOpen(false);

  const handleBackToWelcome = () => navigate("/");

  return (
    <>
      <CongratsDialog
        turns={turns}
        open={isDialogOpen}
        onClose={onClose}
        resetGame={resetGame}
        backToWelcome={handleBackToWelcome}
      />

      <div className="flex flex-col items-center h-screen max-w-screen-xl gap-6 m-auto p-8">
        <div className="flex w-full gap-4 items-center justify-between">
          <span className="text-xl font-bold">Turns: {turns}</span>

          <div className="flex gap-4">
            <Button variant="outline" onClick={handleBackToWelcome}>
              Back to Welcome
            </Button>

            <Button onClick={resetGame}>Restart Game</Button>
          </div>
        </div>

        <Card className="flex-1 w-full flex justify-center items-center p-4">
          <GameBoard cards={cards} onCardClick={handleCardClick} />
        </Card>
      </div>
    </>
  );
};

export { GamePage };

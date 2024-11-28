import CongratsDialog from "@/components/congrats-dialog";
import { GameBoard } from "@/components/game-board";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGameLogic } from "@/hooks/use-game-logic";
import { useNumberStore } from "@/stores/number";
import { useCallback, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const GamePage = () => {
  const navigate = useNavigate();
  const maxNumber = useNumberStore((state) => state.maxNumber);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCongratulations = useCallback(() => {
    setIsDialogOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsDialogOpen(false);
  }, []);

  const handleBackToWelcome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const { cards, turns, resetGame, handleCardClick } = useGameLogic({
    maxNumber,
    onGameComplete: handleCongratulations,
  });

  if (!maxNumber) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <CongratsDialog
        turns={turns}
        open={isDialogOpen}
        onClose={handleClose}
        resetGame={resetGame}
        backToWelcome={handleBackToWelcome}
      />

      <div className="container max-w-screen-xl mx-auto px-4 py-8 h-screen flex flex-col">
        <div className="flex items-center justify-between mb-6 sm:flex-row flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="text-xl font-semibold">
              Turns:
              <span className="ml-2">{turns}</span>
            </span>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleBackToWelcome}
              className="w-40"
            >
              Back to Welcome
            </Button>
            <Button onClick={resetGame} className="w-40">
              Restart Game
            </Button>
          </div>
        </div>

        <Card className="flex-1 w-full flex items-center justify-center p-4 shadow-md">
          <GameBoard cards={cards} onCardClick={handleCardClick} />
        </Card>
      </div>
    </>
  );
};

export { GamePage };

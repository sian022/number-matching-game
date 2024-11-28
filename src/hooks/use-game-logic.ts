import { useState, useEffect, useCallback } from "react";

export type StatefulCard = {
  id: number;
  value: number;
  state: "face-down" | "revealed" | "matched";
};

export const useGameLogic = ({
  maxNumber,
  onGameComplete,
}: {
  maxNumber: number;
  onGameComplete: () => void;
}) => {
  const [cards, setCards] = useState<Map<number, StatefulCard>>(
    new Map(
      Array.from({ length: maxNumber }, (_, i) => i + 1)
        .concat(Array.from({ length: maxNumber }, (_, i) => i + 1))
        .sort(() => Math.random() - 0.5)
        .map((value, index) => [
          index,
          { id: index, value, state: "face-down" },
        ])
    )
  );

  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [turns, setTurns] = useState(0);

  const incrementTurns = useCallback(() => {
    setTurns((prev) => prev + 1);
  }, []);

  const resetGame = useCallback(() => {
    setCards(
      new Map(
        Array.from({ length: maxNumber }, (_, i) => i + 1)
          .concat(Array.from({ length: maxNumber }, (_, i) => i + 1))
          .sort(() => Math.random() - 0.5)
          .map((value, index) => [
            index,
            { id: index, value, state: "face-down" },
          ])
      )
    );
    setRevealedCards([]);
    setIsProcessing(false);
    setTurns(0);
  }, [maxNumber]);

  const handleCardClick = useCallback(
    (id: number) => {
      const card = cards.get(id);
      if (
        !card ||
        card.state === "revealed" ||
        card.state === "matched" ||
        isProcessing
      ) {
        return;
      }

      // Reveal the clicked card
      const updatedCard = { ...card, state: "revealed" };
      setCards((prev) => new Map(prev).set(id, updatedCard));

      // Add this card to the revealed cards list
      setRevealedCards((prev) => [...prev, id]);

      // If two cards are revealed, start processing
      if (revealedCards.length === 1) {
        setIsProcessing(true);

        const firstCard = cards.get(revealedCards[0]);
        const secondCard = card;

        if (firstCard && secondCard && firstCard.value === secondCard.value) {
          // Set both cards to "matched"
          setCards((prev) =>
            new Map(prev)
              .set(revealedCards[0], { ...firstCard, state: "matched" })
              .set(id, { ...secondCard, state: "matched" })
          );
          setRevealedCards([]);
          setIsProcessing(false);
        } else {
          // Flip both cards back to "face-down" after a short delay
          setTimeout(() => {
            setCards((prev) =>
              new Map(prev)
                .set(revealedCards[0], { ...firstCard, state: "face-down" })
                .set(id, { ...secondCard, state: "face-down" })
            );
            setRevealedCards([]);
            setIsProcessing(false);
          }, 1000); // 1 second delay
        }

        incrementTurns();
      }
    },
    [cards, revealedCards, isProcessing, incrementTurns]
  );

  // Check if the game is completed
  useEffect(() => {
    const isGameCompleted = Array.from(cards.values()).every(
      (card) => card.state === "matched"
    );

    if (isGameCompleted) {
      setTimeout(() => {
        onGameComplete();
      }, 500); // 0.5 second delay
    }
  }, [cards, onGameComplete]);

  return {
    cards,
    turns,
    resetGame,
    handleCardClick,
  };
};
import { NumberCard } from "./number-card";
import { type StatefulCard } from "@/hooks/use-game-logic";

type GameBoardProps = {
  cards: Map<number, StatefulCard>;
  onCardClick: (id: number) => void;
};

const GameBoard = ({ cards, onCardClick }: GameBoardProps) => {
  return (
    <div className="flex flex-wrap gap-4 p-4 w-full justify-center">
      {Array.from(cards.values()).map((card) => (
        <NumberCard
          key={card.id}
          number={card.value}
          state={card.state}
          onClick={() => onCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export { GameBoard };

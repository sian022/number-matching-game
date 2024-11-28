import { NumberCard } from "./number-card";
import { type StatefulCard } from "@/hooks/use-game-logic";

type GameBoardProps = {
  cards: Map<number, StatefulCard>;
  onCardClick: (id: number) => void;
};

const GameBoard = ({ cards, onCardClick }: GameBoardProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
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

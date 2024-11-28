import { NumberCard } from "@/components/number-card";
import { useState } from "react";

const GamePage = () => {
  const [state, setState] = useState("face-down");
  const toggleState = () => {
    setState((state) =>
      state === "face-down"
        ? "revealed"
        : state === "revealed"
        ? "matched"
        : "face-down"
    );
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      {/* TODO: Score tracking */}

      {/* TODO: Reset button */}

      {/* TODO: Game board with {maxNumber} cards */}
      <NumberCard
        number={1}
        state={state}
        onClick={() => {
          toggleState();
        }}
      />
    </div>
  );
};

export default GamePage;

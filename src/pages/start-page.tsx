import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useNumberStore from "@/stores/number";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();
  const setMaxNumber = useNumberStore((state) => state.setMaxNumber);

  const [number, setNumber] = useState(null);

  const handleStartGame = (e: any) => {
    e.preventDefault();

    if (number) {
      setMaxNumber(number);
      navigate("/game");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <form
        className="flex flex-col items-center gap-4"
        onSubmit={handleStartGame}
      >
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Welcome to the game!</h1>
          <p className="text-gray-400 text-sm">
            Enter a maximum number to start the game
          </p>
        </div>

        <Input
          placeholder="Enter a maximum number"
          type="number"
          onChange={(e) => setNumber(e.target.value)}
        />

        <Button className="w-full">Start game</Button>
      </form>
    </div>
  );
};

export default StartPage;

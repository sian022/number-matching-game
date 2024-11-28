import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNumberStore } from "@/stores/number";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  const setMaxNumber = useNumberStore((state) => state.setMaxNumber);

  const [number, setNumber] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleStartGame = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate input to ensure it's a positive number
    const parsedNumber = parseInt(number, 10);
    if (parsedNumber < 0) {
      setError("Please enter a valid number greater than 0.");
    } else if (parsedNumber > 100) {
      setError("Please enter a number less than 100.");
    } else {
      setMaxNumber(parsedNumber);
      navigate("/game");
    }
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);

    if (error) {
      setError("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <form
        className="flex flex-col items-center gap-4 bg-white p-10 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleStartGame}
      >
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to Number Matcher!
          </h1>
          <p className="text-gray-500 text-sm">
            Start at 1 and match all numbers up to your chosen maximum in the
            fewest turns.
          </p>
        </div>

        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="maxNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Enter a number
          </label>

          <Input
            id="maxNumber"
            placeholder="Enter a number"
            type="number"
            value={number}
            onChange={handleNumberChange}
            className="mt-1"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <Button className="w-full">Start Game</Button>
      </form>
    </div>
  );
};

export { WelcomePage };

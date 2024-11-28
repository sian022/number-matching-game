import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type NumberCardProps = {
  number: number;
  state: string | "face-down" | "revealed" | "matched";
  onClick: () => void;
};

const NumberCard = ({ number, state, onClick }: NumberCardProps) => {
  return (
    <Card
      className={cn(
        "w-20 h-20 flex items-center justify-center border transition-transform duration-300",
        state === "face-down" &&
          "bg-gray-500 text-transparent cursor-pointer hover:scale-105",
        state === "revealed" && "bg-white text-black cursor-pointer",
        state === "matched" && "bg-green-200 text-black cursor-default"
      )}
      onClick={state === "face-down" ? onClick : undefined}
    >
      <span
        className={cn(
          "font-bold text-4xl",
          state === "face-down" && "select-none"
        )}
      >
        {state === "face-down" ? "?" : number}
      </span>
    </Card>
  );
};

export { NumberCard };

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type NumberCardProps = {
  number: number;
  state: "face-down" | "revealed" | "matched";
  onClick: () => void;
  className?: string;
};

const NumberCard = ({ number, state, onClick, className }: NumberCardProps) => {
  return (
    <Card
      className={cn(
        "w-20 h-20 flex items-center justify-center border-2 transition-all duration-300 transform",
        "rounded-md shadow-sm",
        state === "face-down" &&
          "bg-primary/90 text-primary-foreground border-primary/70 cursor-pointer " +
            "hover:shadow-md hover:scale-105 active:scale-95",
        state === "revealed" &&
          "bg-card text-card-foreground border-primary/50 " +
            "hover:bg-accent cursor-pointer shadow-md",
        state === "matched" &&
          "bg-green-100/50 text-green-800 border-green-500/50 " +
            "cursor-default opacity-60 scale-90 shadow-sm",
        className
      )}
      onClick={state === "face-down" ? onClick : undefined}
    >
      <span
        className={cn(
          "font-bold text-4xl transition-all select-none",
          state === "face-down" && "text-primary-foreground/70",
          state === "revealed" && "text-card-foreground",
          state === "matched" && "text-green-900"
        )}
      >
        {state === "face-down" ? "?" : number}
      </span>
    </Card>
  );
};

export { NumberCard };

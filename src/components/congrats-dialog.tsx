import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

const CongratsDialog = ({
  open,
  onClose,
  turns,
  resetGame,
  backToWelcome,
}: {
  open: boolean;
  onClose: () => void;
  turns: number;
  resetGame: () => void;
  backToWelcome: () => void;
}) => {
  const handleRestart = () => {
    resetGame();
    onClose();
  };
  return (
    <Dialog open={open} onOpenChange={onClose} modal defaultOpen={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Congratulations!</DialogTitle>
          <DialogDescription>
            You have completed the game in {turns} turns.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button variant="outline" onClick={backToWelcome}>
            Home
          </Button>
          <Button onClick={handleRestart}>Restart</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CongratsDialog;

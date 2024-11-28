import GamePage from "@/pages/game-page";
import StartPage from "@/pages/start-page";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
]);

export default router;

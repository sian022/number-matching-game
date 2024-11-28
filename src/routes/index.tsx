import { GamePage } from "@/pages/game-page";
import { WelcomePage } from "@/pages/welcome-page";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
]);

export default router;

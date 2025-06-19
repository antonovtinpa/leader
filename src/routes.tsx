// router.tsx
import { createBrowserRouter } from "react-router";
import App from "./App";
import LecturePage from "./pages/LecturePage";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/lecture/:slug", element: <LecturePage /> },
    ],
  },
]);

export default router;

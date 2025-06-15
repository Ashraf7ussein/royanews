import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import NewsPage from "./NewsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import NewsPage from "./NewsPage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
    ],
  },
]);

export default router;

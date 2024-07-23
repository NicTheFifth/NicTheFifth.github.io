import { createHashRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import React from "react";

const CardGame = React.lazy(() => import("./pages/CardGame"));

function App() {
  const router = createHashRouter([
    {
      index: true,
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/card-game",
      element: <CardGame />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

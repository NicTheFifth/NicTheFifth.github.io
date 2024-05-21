import { createHashRouter, RouterProvider } from "react-router-dom";
import ComponentGenerator from "./pages/ComponentGenerator";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/componentgenerator",
      element: <ComponentGenerator />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

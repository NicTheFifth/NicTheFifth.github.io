import {
  createHashRouter,
  RouterProvider,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import ComponentGenerator from "./pages/ComponentGenerator";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <PageNotFound />,
      children: [
        {
          path: "/componentgenerator",
          element: <ComponentGenerator />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

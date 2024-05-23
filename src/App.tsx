import { createHashRouter, RouterProvider } from "react-router-dom";
import ComponentGenerator from "./pages/ComponentGenerator";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import Box from "@mui/material/Box";

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

  return (
    <Box
      sx={{ background: "linear-gradient(#1a857d, #167c4c)" }}
      minHeight={100}
      minWidth={100}
    >
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;

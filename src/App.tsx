import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import NotFound from "./pages/notFound";
import { Home } from "./pages/home";
import { Layout } from "./components/layout";
import TandC from "./pages/tandc";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/404",
      element: <NotFound />,
    },

    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/home" replace />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/termsandconditions",
          element: <TandC />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

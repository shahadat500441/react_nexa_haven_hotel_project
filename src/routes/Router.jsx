import Main from "../layout/Main";
import Home from "../pages/Home";

import { createBrowserRouter } from "react-router-dom";
import EstateDetailsPage from "../pages/EstateDetailsPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/estates.json"),
      },
      {
        path: "/estate/:id",
        loader: () => fetch(`/estates.json`),
        element: (
          <PrivateRoute>
            <EstateDetailsPage></EstateDetailsPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

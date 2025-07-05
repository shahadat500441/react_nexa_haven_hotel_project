import Main from "../layout/Main";
import Home from "../pages/Home";


import {
  createBrowserRouter,
  
} from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import EstateDetailsPage from "../pages/EstateDetailsPage";



 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch("/estates.json")
        },
        {
          path:"/estate/:id",
          element:<EstateDetailsPage></EstateDetailsPage>,
         
        },
        {
        path:"/register",
        element:<Register></Register>
        },
        {
            path:"/login",
            element:<Login></Login>
        }
    ]
  },
]);
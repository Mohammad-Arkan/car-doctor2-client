import { createBrowserRouter } from "react-router-dom/dist/umd/react-router-dom.development";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/Login/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/login",
          element:<Login></Login>
        },

        {
          path:"/signup",
          element:<SignUp></SignUp>

        }
      ]
    },
  ]);
  export default router
import { createBrowserRouter, RouterProvider } from  "react-router-dom";


import App from "./App.jsx";
import HomePage from "./Pages/Home";
import Project from "./Pages/Project.jsx"
import Contact from "./Pages/Contact.jsx"


const router = createBrowserRouter([
{
    path:"/",
    element:<App />,
    children :[

        {
            path:"home",
            element:<HomePage />,
        },
          {
            path: "project",
            element: <Project />,
          },{
            path: "Contact",
            element: <Contact />,
          }
    ]
}
])
const Router =()=><RouterProvider router ={router} />;
export default Router;

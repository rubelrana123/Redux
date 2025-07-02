import App from "@/App";

import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
 

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component : App,
    children : [{
        // path : "users",
        index : true,
        // element : <User/>
        Component : User
    },
    {
        path : "users",
    
        // element : <User/>
        Component : User
    },

    {
        path : "tasks",
        Component : Tasks
    }


    ]
  },
]);

export default router;
import App from "@/App";
import Counter from "@/pages/Counter";
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
        path : "counter",
        element : <Counter/>
    },
    {
        path : "tasks",
        Component : Tasks
    }


    ]
  },
]);

export default router;
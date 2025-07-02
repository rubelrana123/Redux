import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { deleteUser } from "../users/userSlice";

interface InitialState {
    tasks : ITask[],
    filter : "All" | "High"|"Low" |"Medium"
}
  const initialState: InitialState = {
    tasks : [
       {
    id: "1",
    title: "Complete TypeScript assignment",
    discription: "Finish the interface and types lesson",
    dueDate: "2025-07-01",
    isCompleted: false,
    priority: "High",
    assignTo : null
  }
    ],
    filter : "All"
  }
  type DraftTask = Pick<ITask, "title" | "discription" | "dueDate" | "priority" | "assignTo">;
  const createTask = (taskData : DraftTask) : ITask => {
    return {
      ...taskData,
      id : nanoid(),
      isCompleted : false,
      assignTo : taskData.assignTo ? taskData.assignTo : null
    }

  }
const taskSlice = createSlice({
    name : "task",
    initialState,
    reducers : {
      addToTask : (state, action : PayloadAction<DraftTask>) =>{
        const taskData = createTask(action.payload);
        // const id =  uuidv4()
        // const taskData = {
        //   ...action.payload,
        //   id,
        //   isCompleted : false
        // }
        state.tasks.push(taskData);
      },
      toggleCompleteState : (state, action : PayloadAction<string>) => {
        console.log("state", state);
        console.log("action", action);

        state.tasks.forEach((task) => task.id === action.payload ? task.isCompleted  = !task.isCompleted : task );

      },
      deleteTask : (state, action : PayloadAction<string>)=> {
                console.log("state", state);
        console.log("action", action);
       state.tasks =  state.tasks.filter((task) => task.id !== action.payload);

      },
       updateTask: (state, action: PayloadAction<ITask>) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    updateFilter : (state, action : PayloadAction< "All" | "High"|"Low" |"Medium">) =>{
        state.filter = action.payload

    }


    },
    extraReducers : (builder) =>{
      builder.addCase(deleteUser, (state, action)=>{
        console.log("extra reducers",deleteUser, state,action)
        state.tasks.forEach(task => task.assignTo === action.payload ? task.assignTo = null : task);
      })

    }

});
export const {addToTask, toggleCompleteState ,deleteTask,updateTask,updateFilter} = taskSlice.actions;
export default taskSlice.reducer;
export const selectTasks = (state : RootState) =>{
  const filter = state.todo.filter;
  if(filter ==="Low"){
      return state.todo.tasks.filter((task) => task.priority === "Low")
  }else   if(filter ==="High"){
      return state.todo.tasks.filter((task) => task.priority === "High")
  }else   if(filter ==="Medium"){
      return state.todo.tasks.filter((task) => task.priority === "Medium")
  }else{

    return state.todo.tasks
  }

};
export const selectFilter = (state : RootState) =>{
    return state.todo.filter
}
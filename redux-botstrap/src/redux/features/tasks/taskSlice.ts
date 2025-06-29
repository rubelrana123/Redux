import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
    tasks : ITask[],
    filter : "all" | "High"|"Low" |"Medium"
}
  const initialState: InitialState = {
    tasks : [
 {
    id: "task id 1",
    title: "initial title",
    discription: "initital task discription",
    dueDate: "2025-01-01",
    isCompleted: false,
    priority: "High",
  },
  {
    id: "task id 2",
    title: "github title",
    discription: "github task discription",
    dueDate: "2025-01-01",
    isCompleted: false,
    priority: "Medium",
  }
],
filter : "all"
  }
const taskSlice = createSlice({
    name : "task",
    initialState,
    reducers : {

    }

});
export default taskSlice.reducer;
export const selectTasks = (state : RootState) =>{
    return state.todo.tasks
};
export const selectFilter = (state : RootState) =>{
    return state.todo.filter
}
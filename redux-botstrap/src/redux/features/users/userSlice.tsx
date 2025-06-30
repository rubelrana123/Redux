import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
    users : IUser[]
}
const initialState : InitialState = {
    users : [ 
        {
    id: "1",
    name: "Rubel Rana"
    },
    {
    id: "2",
    name: "Sohel Rana"
    }
    ]
}
const userSlice = createSlice({
    name :"user",
    initialState,
    reducers :{
        addUser : (state, action) =>{
      
         const id =  nanoid()
        const userData = {
          ...action.payload,
          id,
          isCompleted : false
        }

        state.users.push(userData)
        },
              deleteUser : (state, action : PayloadAction<string>)=> {
                        console.log("state", state);
                console.log("action", action);
               state.users =  state.users.filter((user) => user.id !== action.payload);
        
         },

    }
})

export default userSlice.reducer;
export const {addUser, deleteUser} = userSlice.actions;
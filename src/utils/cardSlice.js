import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name : "card",
    initialState:{
        status : false
    },

    reducers :{
        addStatus : (state,action)=>{
            state.status = action.payload;
        },
    }
})

export const {addStatus} = cardSlice.actions;
export default cardSlice.reducer;
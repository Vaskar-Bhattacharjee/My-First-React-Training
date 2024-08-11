import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    status : false,
    useData: null
}
const authSlice =  createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state, action) =>{
            state.status = true;
            state.userData = action.payload.useData;
        },
        logout : (state) => {
            state.status= false;
            state.userData = null;
        }
    }
})

export default authSlice.reducer;
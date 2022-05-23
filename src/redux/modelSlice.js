import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userModel : false
}

const modelSlice = createSlice({
    name:'model',
    initialState:initialState,
    reducers:{
        modelOpen(state){
            state.userModel = true
        },
        modelClose(state){
            state.userModel = false
        }
    }
});

export const modelAction = modelSlice.actions;

export default modelSlice.reducer;
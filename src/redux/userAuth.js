import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn : false
}

const userSlice = createSlice({
    name : 'user',
    initialState : initialState,
    reducers : {
        logIn(state){
            state.isLoggedIn = true;
        },
        logOut(state){
            state.isLoggedIn = false;
        }
    }
});

export const userAction = userSlice.actions;

export default userSlice.reducer
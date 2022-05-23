import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userAuth';
import modelSlice from './modelSlice';

const store = configureStore({
    reducer : {user : userSlice,model:modelSlice}
})


export default store
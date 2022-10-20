import { configureStore } from '@reduxjs/toolkit';
import dogReducer from '../slices/dogsSlice';

export default configureStore({
    reducer: {
        dogs: dogReducer
    }
});
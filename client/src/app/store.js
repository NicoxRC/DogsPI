import { configureStore } from '@reduxjs/toolkit';
import dogReducer from '../features/dogs/dogsSlice';

export default configureStore({
    reducer: {
        dogs: dogReducer
    }
})
import dogReducer from '../slices/dogsSlice';
import paginationReducer from '../slices/paginationSlice';
import temperamentsSlice from '../slices/temperamentsSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        dogs: dogReducer,
        pagination: paginationReducer,
        temperaments: temperamentsSlice
    }
});
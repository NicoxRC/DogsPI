import { configureStore } from '@reduxjs/toolkit';
import dogReducer from '../slices/dogsSlice';
import paginationReducer from '../slices/paginationSlice';

export default configureStore({
    reducer: {
        dogs: dogReducer,
        pagination: paginationReducer
    }
});
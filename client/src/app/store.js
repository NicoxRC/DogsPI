import dogReducer from '../slices/dogsSlice';
import paginationReducer from '../slices/paginationSlice';
import temperamentsReducer from '../slices/temperamentsSlice';
import filtersReducer from '../slices/filtersSlice';
import sortsReducer from '../slices/sortsSlice'
import showDogsReducer from '../slices/showDogsSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        dogs: dogReducer,
        pagination: paginationReducer,
        temperaments: temperamentsReducer,
        filters: filtersReducer,
        sorts: sortsReducer,
        showDogs: showDogsReducer
    }
});
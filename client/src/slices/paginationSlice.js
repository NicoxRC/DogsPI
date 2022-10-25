import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 0,
    dogsPerPage: 8,
    actualDogs: []
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        actualDogsPag: (state, action) => {
            state.actualDogs = action.payload;
        }
    }
})

export const { actualDogsPag } = paginationSlice.actions;
export default paginationSlice.reducer;


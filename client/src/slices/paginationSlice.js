import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 1,
    dogsPerPage: 8,
    actualDogs: []
}

export const paginationSlice = createSlice({
    name: 'paginationxd',
    initialState,
    reducers: {
        paginationAction: (state, action) => {
            state.currentPage = action.payload;
        },
        actualDogsPag: (state, action) => {
            state.actualDogs = action.payload;
        }
    }
})

export const { paginationAction, actualDogsPag } = paginationSlice.actions;
export default paginationSlice.reducer;


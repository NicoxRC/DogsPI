import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pag: {
        currentPage: 0,
        dogsPerPage: 8,
    },
    actualDogs: []
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPagination: (state, action) => {
            state.pag.currentPage = action.payload.actualPage;
            state.actualDogs = action.payload.allDogsShow?.slice(
                action.payload.actualPage * action.payload.pag.dogsPerPage - action.payload.pag.dogsPerPage,
                action.payload.actualPage * action.payload.pag.dogsPerPage
            );
        }
    }
})

export const { setPagination } = paginationSlice.actions;
export default paginationSlice.reducer;


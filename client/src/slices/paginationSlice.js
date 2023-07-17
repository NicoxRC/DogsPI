import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pag: {
    currentPage: 1,
    dogsPerPage: 8,
  },
  actualDogs: [],
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.pag.currentPage = action.payload;
    },
    setPagination: (state, action) => {
      state.actualDogs = action.payload.allDogsShow?.slice(
        action.payload.pag.currentPage * action.payload.pag.dogsPerPage -
          action.payload.pag.dogsPerPage,
        action.payload.pag.currentPage * action.payload.pag.dogsPerPage
      );
    },
  },
});

export const { setPagination, setPage } = paginationSlice.actions;
export default paginationSlice.reducer;

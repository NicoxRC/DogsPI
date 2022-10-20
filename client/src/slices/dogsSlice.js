import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAllDogs from "../connection/getDogs";

const initialState = {
    allDogs: []
};

export const fetchDogs = createAsyncThunk(
    'dogs/fetchDogs',
    async (_, { dispatch }) => {
        const allDogs = await getAllDogs();
        dispatch(getDogs(allDogs));
    }
);


export const dogSlice = createSlice({
    name: 'dogs',
    initialState,
    reducers: {
        getDogs: (state, action) => {
            state.allDogs = action.payload;
        }
    }
});

export const { getDogs } = dogSlice.actions;
export default dogSlice.reducer;
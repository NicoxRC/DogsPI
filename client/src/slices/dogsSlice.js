import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAllDogs from "../connection/getDogs";
import searchDog from "../connection/searchDog";

const initialState = {
    allDogs: [],
    dogName: []
};

export const fetchDogs = createAsyncThunk(
    'dogs/fetchDogs',
    async (_, { dispatch }) => {
        const allDogs = await getAllDogs();
        dispatch(getDogs(allDogs));
    }
);

export const fetchDog = createAsyncThunk(
    'dogs/fetchDog',
    async (search, { dispatch }) => {
        const dog = await searchDog(search);
        dispatch(getDogName(dog));
    }
);

export const dogSlice = createSlice({
    name: 'dogs',
    initialState,
    reducers: {
        getDogs: (state, action) => {
            state.allDogs = action.payload;
        },
        getDogName: (state, action) => {
            state.dogName = action.payload;
        }
    }
});

export const { getDogs, getDogName } = dogSlice.actions;
export default dogSlice.reducer;
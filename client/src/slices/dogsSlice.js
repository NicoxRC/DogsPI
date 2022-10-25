import getDogsApi from "../connection/getDogsApi";
import searchDogApi from "../connection/searchDogApi";
import postDogApi from "../connection/postDogApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    allDogs: [],
    dogName: []
};

export const fetchDogs = createAsyncThunk(
    'dogs/fetchDogs',
    async (_, { dispatch }) => {
        const allDogs = await getDogsApi();
        dispatch(getDogs(allDogs));
    }
);

export const fetchDog = createAsyncThunk(
    'dogs/fetchDog',
    async (search, { dispatch }) => {
        const dog = await searchDogApi(search);
        dispatch(getDogName(dog));
    }
);

export const postDog = createAsyncThunk(
    'dogs/postDog',
    async (newDog, { dispatch }) => {
        await postDogApi(newDog);
        dispatch(fetchDogs())
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
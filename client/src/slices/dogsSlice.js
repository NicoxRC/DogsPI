import getDogsApi from '../services/getDogsApi';
import searchDogApi from '../services/searchDogApi';
import postDogApi from '../services/postDogApi';
import getDogDetailsApi from '../services/getDogDetailsApi';
import { setLoading } from './loadingSlice';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  allDogs: [],
  dogName: [],
  dogDetails: {},
};

export const fetchDogs = createAsyncThunk(
  'dogs/fetchDogs',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const allDogs = await getDogsApi();
    dispatch(getDogs(allDogs));
    dispatch(setLoading(false));
  }
);

export const fetchDog = createAsyncThunk(
  'dogs/fetchDog',
  async (search, { dispatch }) => {
    dispatch(setLoading(true));
    const dog = await searchDogApi(search);
    dispatch(getDogName(dog));
    dispatch(setLoading(false));
  }
);

export const postDog = createAsyncThunk(
  'dogs/postDog',
  async (newDog, { dispatch }) => {
    dispatch(setLoading(true));
    await postDogApi(newDog);
    dispatch(fetchDogs());
    dispatch(setLoading(false));
  }
);

export const fetchDogDetails = createAsyncThunk(
  'dogs/fetchDogDetails',
  async (id, { dispatch }) => {
    dispatch(setLoading(true));
    const dogDetails = await getDogDetailsApi(id);
    dispatch(getDogDetails(dogDetails));
    dispatch(setLoading(false));
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
    },
    getDogDetails: (state, action) => {
      state.dogDetails = action.payload;
    },
  },
});

export const { getDogs, getDogName, getDogDetails } = dogSlice.actions;
export default dogSlice.reducer;

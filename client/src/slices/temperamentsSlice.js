import getTemperamentsApi from '../services/getTemperamentsApi';
import { setLoading } from './loadingSlice';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  allTemperaments: [],
};

export const fetchTemperaments = createAsyncThunk(
  'temperaments/fetchTemperaments',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const allTemperaments = await getTemperamentsApi();
    dispatch(getTemperaments(allTemperaments));
    dispatch(setLoading(true));
  }
);

export const temperamentsSlice = createSlice({
  name: 'temperaments',
  initialState,
  reducers: {
    getTemperaments: (state, action) => {
      state.allTemperaments = action.payload;
    },
  },
});

export const { getTemperaments } = temperamentsSlice.actions;
export default temperamentsSlice.reducer;

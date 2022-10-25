import getTemperamentsApi from '../connection/getTemperamentsApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    allTemperaments: []
};

export const fetchTemperaments = createAsyncThunk(
    'temperaments/fetchTemperaments',
    async (_, { dispatch }) => {
        const allTemperaments = await getTemperamentsApi();
        dispatch(getTemperaments(allTemperaments));
    }
)

export const temperamentsSlice = createSlice({
    name: 'temperaments',
    initialState,
    reducers: {
        getTemperaments: (state, action) => {
            state.allTemperaments = action.payload;
        }
    }
})

export const { getTemperaments } = temperamentsSlice.actions;
export default temperamentsSlice.reducer;

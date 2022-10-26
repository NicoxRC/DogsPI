import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allDogsShow: []
}

export const showDogsSlice = createSlice({
    name: 'showDogs',
    initialState,
    reducers: {
        setShowDogs: (state, action) => {
            state.allDogsShow = action.payload;
        }
    }
})

export const { setShowDogs } = showDogsSlice.actions;
export default showDogsSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sortDogs: []
}

export const sortsSlice = createSlice({
    name: 'sorts',
    initialState,
    reducers: {
        sortName: (state, action) => {
            const allDogsShow = [...action.payload.allDogsShow];
            state.sortDogs = action.payload.sortName === true
                ? allDogsShow.sort((a, b) => a.name.localeCompare(b.name))
                : allDogsShow.sort((a, b) => b.name.localeCompare(a.name))
        },
        sortWeight: (state, action) => {
            const allDogsShow = [...action.payload.allDogsShow];
            state.sortDogs = action.payload.sortWeight === true
                ? allDogsShow.sort((a, b) => parseInt(a.weight) - parseInt(b.weight))
                : allDogsShow.sort((a, b) => parseInt(b.weight) - parseInt(a.weight))
        }
    }
})

export const { sortName, sortWeight } = sortsSlice.actions;
export default sortsSlice.reducer;
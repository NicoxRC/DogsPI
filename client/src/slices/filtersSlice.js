import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterDogs: []
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filterByTemperaments: (state, action) => {
            const temperament = action.payload.filterByTemperament === 'all'
                ? action.payload.allDogs
                : action.payload.allDogs.filter(el => el.temperament?.includes(action.payload.filterByTemperament))
            state.filterDogs = temperament;
        },
        filterBySource: (state, action) => {
            const source = action.payload.filterBySource === 'all'
                ? action.payload.allDogs
                : action.payload.filterBySource === 'api'
                    ? action.payload.allDogs.filter(el => typeof el.id === 'number')
                    : action.payload.allDogs.filter(el => typeof el.id === 'string')
            state.filterDogs = source;
        }
    }
})

export const { filterByTemperaments, filterBySource } = filtersSlice.actions;
export default filtersSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    input: null,
    selectedPerformers: null,
    movies: [],
}
const inputReducer = createSlice({
    name: "input",
    initialState,
    reducers: {
        addInput: (state, action) => {
            // var currentState = action.payload.performerData;
            var currentState = action.payload.results;
            console.log(currentState)
            return {
                input: currentState
            }

        },
        removeInput: (state, action) => {
            return {
                input: ''
            }
        },
        addSelectedPerformer: (state, action) => {
            var selectedPerformer = action.payload;


            return {
                selectedPerformers: selectedPerformer,
                movies: selectedPerformer.movies
            }

        },
        
        removeSelectedPerformer: (state, action ) => {
            return Object.entries(state.selectedPerformers).filter((performer) => performer.name !== action.payload);
        },



    },
});

export const {
    addInput,
    removeInput,
    addSelectedPerformer,
    removeSelectedPerformer
} = inputReducer.actions;


export const reducer = inputReducer.reducer;

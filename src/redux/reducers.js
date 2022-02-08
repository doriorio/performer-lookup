import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // input: null,
    selectedPerformers: [],
    movies: [],
}
const inputReducer = createSlice({
    name: "performerLookup",
    initialState,
    reducers: {
        // addInput: (state, action) => {
        //     // var currentState = action.payload.performerData;
        //     var currentState = action.payload.results;
        //     console.log(currentState);
        //     return {
        //         input: currentState
        //     };

        // },
        // removeInput: (state, action) => {
        //     return {
        //         input: ''
        //     };
        // },
        //split this into two reducers??
        // addSelectedPerformer: (state, action) => {
        addSelectedPerformer:  {
            reducer(state, action) {
                console.log(action.payload);
                    
    
                let performer = action.payload;

                return {
                    movies: performer.known_for,
                    selectedPerformers: performer
                }
            },
            prepare(performer) {
                console.log(performer);

                var known_for = performer.known_for;
                var movies = [];
                for (const key in known_for) {
                    var movie = known_for[key]['title'];
                    movies.push(movie);
                }
                return {
                    payload: performer['performer'],
                    movies: performer['performer']['known_for']
                }

            }

            //https://redux-toolkit.js.org/api/createslice
            // var selectedPerformer = action.payload;


            // return {
            //     selectedPerformers: selectedPerformer,
            //     movies: selectedPerformer.movies
            // }
            // state.selectedPerformers.push(selectedPerformer)
            // console.log(selectedPerformer);


            // state.selectedPerformers.push(selectedPerformer['performer'])

        },
        
        removeSelectedPerformer: (state, action ) => {
            return Object.entries(state.selectedPerformers).filter((performer) => performer.name !== action.payload);
        },



    },
});

export const {
    // addInput,
    // removeInput,
    addSelectedPerformer,
    removeSelectedPerformer
} = inputReducer.actions;


export const reducer = inputReducer.reducer;

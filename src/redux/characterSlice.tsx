import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "./store";


import { IResults } from "../models/characters";

const initialState: IResults = {
    info: {
        count: 0,
        pages: 0,
        next: 0,
        prev: null
    },
    currentPage: 1,
    isLoading: false,
    results: [{
        id: "",
        image: "",
        name: "",
        species: "",
        status: "",
    }]
}

export const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharacters(state, action){
            state.isLoading = false;
            state.results = action.payload.results 
            state.info = action.payload.info
        },
        charactersLoading(state){
            state.isLoading = true;
        }
    }
});

export const { setCharacters, charactersLoading } = characterSlice.actions;

export default characterSlice.reducer;
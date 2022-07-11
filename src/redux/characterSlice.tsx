import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "./store";


import { ICharacters } from "../models/characters";

interface CharacterState {
    info: {
        count: number;
        pages: number;
        next: number;
        prev: null | number;
    },
    results: ICharacters[]
}

const initialState: CharacterState = {
    info: {
        count: 0,
        pages: 0,
        next: 0,
        prev: null
    },
    results: [{
        id: "1",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        name: "Rick Sanchez",
        species: "Human",
        status: "Alive",
    }]
}

export const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharacters(state, action){
            state.results = action.payload.results 
            state.info = action.payload.info
        }
    }
});

export const { setCharacters } = characterSlice.actions;

export default characterSlice.reducer;
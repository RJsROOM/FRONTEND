import { createSlice } from "@reduxjs/toolkit";

export const themeSlice= createSlice({
    name: 'theme',
    initialState: {
        mode: 'light'
    },
    reducers : {
        togglemode: (state)=>{
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
})

export const {togglemode}= themeSlice.actions;

export default themeSlice.reducer;
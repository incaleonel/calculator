import { createSlice } from "@reduxjs/toolkit";

const initialState={
    display1: 'display1',
    display2: 'display2',
}

export const opSlice=createSlice({

    name: 'display',
    initialState,
    reducers: {

        clickClear:(state)=>{
            state.display1=' ';
            state.display2='0'
        }
    }
})

export const {clickClear} = opSlice.actions

export default opSlice.reducer
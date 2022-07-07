import { createSlice } from "@reduxjs/toolkit";

const initialState={
    display1: '',
    display2: '0',
    operator: [],
    operands: [],
}

export const opSlice=createSlice({

    name: 'display',
    initialState,
    reducers: {
    
        clickClear:(state)=>{
            state.display1=' ';
            state.display2='0'
        },
        clickDigit:(state,action)=>{
            state.display1+=action.payload;
            state.display2+=action.payload;
        },
        clickOperator:(state,action)=>{
            state.display1+=action.payload;
            state.operands=state.operands.concat(Number(state.display2));
            state.display2=action.payload;
        }
    }
})

export const {clickClear,clickDigit,clickOperator} = opSlice.actions

export default opSlice.reducer
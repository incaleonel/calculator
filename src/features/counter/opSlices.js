import { createSlice } from "@reduxjs/toolkit";

const initialState={
    display1: '',
    display2: '0',
    operator: [],
    operands: [],
    lastOp: false,
}

export const opSlice=createSlice({

    name: 'display',
    initialState,
    reducers: {
        clickClear:(state)=>{
            state.display1=' ';
            state.display2='0'
            state.lastOp=false;
            state.operator=[];
            state.operands=[];
        },
        clickDigit:(state,action)=>{
            state.display1+=action.payload;
            if(state.display2==='0' && action.payload!=='.'){
                state.display2=action.payload;
            }else{
                state.display2=state.lastOp?action.payload:state.display2+action.payload;
            }
            state.lastOp=false;
            
        },
        clickOperator:(state,action)=>{
          
            state.display1+=action.payload==='x'? '*':action.payload;
            state.operands=state.operands.concat(Number(state.display2));
            state.operator=state.operator.concat(action.payload);
            state.display2=action.payload;
            state.lastOp=true;
        }
    }
})

export const {clickClear,clickDigit,clickOperator} = opSlice.actions

export default opSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    display1: '',
    display2: '0',
    lastOp: false,//flag para los operadores
    decimal:false,//flag para el punto decimal
    flagNeg:false,//flag para el negativo
}

export const opSlice=createSlice({

    name: 'display',
    initialState,
    reducers: {
        //Limpia la pantalla e inicializa los valores por defecto
        clickClear:(state)=>{
            state.display1='';
            state.display2='0';
            state.lastOp=false;
            state.decimal=false;
            state.flagNeg=false;
        },
        //ingresa y muestra a la salida digitos de 0 a 9
        clickDigit:(state,action)=>{
            
            if(state.display2==='0' && action.payload!=='.'){
                state.display1=action.payload
                state.display2=action.payload;
            }else{
                state.display1+=action.payload;
                state.display2=state.lastOp?action.payload:state.display2+action.payload;
            }
            state.decimal=state.lastOp?false:state.decimal;
            state.lastOp=false;
            state.flagNeg=false;    
            
        },
        //ingresa no mas de 2 operadores consecutivos solo para operadores de multiplicacion, division y suma;
        clickOperator:(state,action)=>{
          if(state.lastOp){
            state.display1=state.display1.substring(0,state.display1.length-1)
          }
          if(state.flagNeg){
            state.display1=state.display1.substring(0,state.display1.length-1)
            state.flagNeg=false;
          }
          
            state.display1+=action.payload==='x'? '*':action.payload;
            
            state.display2=action.payload;
            state.lastOp=true;
        },
        //ingreso de operador negativo, se lo tratara como resta o como el signo del numero
        clickNegative:(state)=>{
            if(state.lastOp){
                if(state.flagNeg){
                  state.display1=state.display1.substring(0,state.display1.length-1)  
                }
                state.flagNeg=true;
            }
                state.display1+='-';
                state.display2='-';
                state.lastOp=true;
        },
        //limitacion del ingreso del punto decimal
        clickDecimal: (state)=>{
            if(state.display1===''){
                state.display1+=state.decimal?'':'0.';
            }else{
                state.display1+=state.decimal?'':'.';
            }
            
            state.display2+=state.decimal?'':'.';
            state.decimal=true;

        },
        //muestra el resultado a la salida
        clickTotal: (state)=>{
            
        }
    }
})

export const {clickClear,clickDigit,clickOperator, clickTotal,clickDecimal,clickNegative} = opSlice.actions

export default opSlice.reducer
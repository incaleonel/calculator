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
            
            if(state.display2==='0'){
                state.display1=state.display1.substring(0,state.display1.length-1);
                state.display2=action.payload;
            }else{
                state.display2=state.lastOp||state.display2==='-'? action.payload: state.display2 + action.payload;
            }
            state.lastOp=false;
            state.flagNeg=false;    
            state.display1+=action.payload;
        },
        //ingresa no mas de 2 operadores consecutivos solo para operadores de multiplicacion, division y suma;
        clickOperator:(state,action)=>{
        if(state.display1!==''&&state.display1!=='-'){
          if(state.flagNeg){
            state.display1=state.display1.substring(0,state.display1.length-2);
            state.flagNeg=false;
          }else if(state.display2==='0.'||state.lastOp||state.display2==='-'){
            state.display1=state.display1.substring(0,state.display1.length-1);
          }
          state.display1+=action.payload==='x'? '*':action.payload;
          state.display2=action.payload;
          state.lastOp=true;
          state.decimal=false;
        }
        },
        //operador negativo, si ya tiene los caracteres '-''-' o '*''-' no hace nada y si display1 tiene '.' al final de la cadena lo elimina. 
        clickNegative:(state)=>{
           
            if(!state.flagNeg){
                if(state.decimal&&state.display2==='0.'){
                    state.display1=state.display1.substring(0,state.display1.length-1);
                }
                state.flagNeg=state.lastOp||state.display2==='-'?true:state.flagNeg;
                state.display1+='-';
                state.display2='-';
                state.decimal=false;
            }
           
        },
        //limitacion del ingreso del punto decimal
        clickDecimal: (state)=>{
            if(!state.decimal){
                if(state.flagNeg||state.lastOp||state.display2==='-'){
                    state.display1+='0.';
                    state.display2='0';
                    state.flagNeg=false;
                    state.lastOp=false;
                }else if(state.display1===''){
                    state.display1+='0.';
                    
                }else{
                    state.display1+='.';
                    
                }
                state.display2+='.';
                state.decimal=true;
            }
        },
        clickZero:(state)=>{

            state.display1+=state.display1===''?'0':'';

            if(state.display2!=='0'){
                state.display1+='0';
                state.display2= state.lastOp||state.display2==='-'? '0':state.display2+'0';
            }
            state.lastOp=false;
            state.flagNeg=false;
        },
        //muestra el resultado a la salida
        clickTotal: (state)=>{
            
        }
    }
})

export const {clickClear,clickDigit,clickOperator, clickTotal,clickDecimal,clickNegative,clickZero} = opSlice.actions

export default opSlice.reducer
import {useSelector,useDispatch} from 'react-redux'
import {clickClear,clickDigit,clickOperator} from './features/counter/opSlices'


export default function App() {
  const key=[{'equals':'='},
             {'zero':'0'},
             {'nine':'9'},
             {'eight':'8'},
             {'seven':'7'},
             {'six':'6'},
             {'five':'5'},
             {'four':'4'},
             {'three':'3'},
             {'two':'2'},
             {'one':'1'},
             {'clear':'AC'},
             {'decimal':'.'},
             {'add':'+'},
             {'subtract':'-'},
             {'divide':'/'},
             {'multiply':'x'}]
const dispatch = useDispatch();
const display = useSelector((state)=>state.op);
  
  return (
    <div id='calculator'>
    <div id='display'>
      <p id='result'>{display.display1}</p>
      <p id='op'>{display.display2}</p>
    </div>
      {
        key.map((x)=>{
          switch(Object.values(x)[0]){
            case 'AC': 
                      return(<button className='key limpieza' onClick={()=>dispatch(clickClear())}id={Object.keys(x)[0]}>{Object.values(x)[0]}</button>);
            case '=': 
                      return(<button className='key resultado' onClick="" id={Object.keys(x)[0]}>{Object.values(x)[0]}</button>);
            case 'x':
            case '/':
            case '+':
            case '-': 
                      return(<button className='key prueba' onClick={()=>dispatch(clickOperator(Object.values(x)[0]))} id={Object.keys(x)[0]}>{Object.values(x)[0]}</button>);
            default: 
                      return(<button className='key digit'  onClick={()=>dispatch(clickDigit(Object.values(x)[0]))} id={Object.keys(x)[0]}>{Object.values(x)[0]}</button>);
          }
        })
      }
    </div>
  );
}


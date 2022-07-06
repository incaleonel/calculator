
function App() {
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
  return (
    <div id='calculator'>
    <div id='display'>
      <p id='result'>Display</p>
      <p id='op'>subdisplay</p>
    </div>
      {
        key.map((x)=>{
          return(
            <button className='key' id={Object.keys(x)[0]}>{Object.values(x)[0]}</button>
          );
        })
      }
    </div>
  );
}

export default App;

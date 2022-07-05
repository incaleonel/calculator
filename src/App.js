
function App() {
  const key=['equals','zero','one','two','three','four','five','six','seven','eight','nine','clear','decimal','add','subtract','divide','multiply'];
  return (
    <div id='calculator'>
    <div id='display'>
      <p id='result'>Display</p>
      <p id='op'>subdisplay</p>
    </div>
      {
        key.map((x)=>{
          return(
            <button className='key' id={x}></button>
          );
        })
      }
    </div>
  );
}

export default App;

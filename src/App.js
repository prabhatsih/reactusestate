import './App.css';
import { useState } from 'react';
import Stylechager from './Stylechanger/Stylechager';
import Fontsize from './Fontsize/Fontsize';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  // console.log(useState());
  // const [change, update] = useState("CNC Web World");
  let [count, setCount] = useState(5);
  let [bg, setBg] = useState('bg-info')

  function subt(){
    if(count > 1){
      count -= 1;
      setCount(count);
    }
  }

  return (
    <>
      <div style={{height:'100vh'}} className={bg}>
        {/* <h1>{change}</h1>
        <button onClick={()=>update("Programming Site")}>Click Me</button> */}

        <h2>Counter</h2>
        <h3>Value : {count}</h3>
        <button onClick={subt}>Subtarct</button>
        <button onClick={() => setCount(count + 1)}>Add</button> 
        <hr/>
        <Stylechager />
        <Fontsize/>

        <div className='d-flex justify-content-evenly'>
          <button className='btn btn-danger' onClick={()=>setBg('bg-danger')}>Red</button>
          <button className='btn btn-success' onClick={()=>setBg('bg-success')}>Green</button>
        </div>
      </div>
    </>
  );
}

export default App;

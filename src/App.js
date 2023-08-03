
import { useState } from 'react';
import './App.css';
import ClickComponent from './ClickComponent';
import  PureComponent from './PureComopnent';


function App() {
  const [count, setCount] = useState(0);
  const Plus =() =>{
    setCount(count+1)
  }
  return (
    <div className="App">
      <h1 className='main'>Pure Comopnent:{count}</h1>
      <PureComponent/>
      <br/>
      <br/>

    <button className='button' onClick={()=>{
      Plus()
    }}>Click Me</button>
    <br/>
    <br/>
    <ClickComponent/>   
    </div>
  );
}

export default App;

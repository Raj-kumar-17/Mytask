import { useState } from 'react';
import Label from './Label';
import Inputbox from './Inputbox';
import Drop from './Drop';
import Radio from './Radio';
import './App.css';


const Newrender=()=>{
  return <h1>Hi your Form content is altered</h1>
}

function App() {
  const [rendered,isrendered]=useState(true);
  return (
    rendered?<div className="App">
        <Label text={"First Name"}/><Inputbox/>
        <Label text={"Last Name"}/><Inputbox/>
        <Label text={"Department"}/><Drop/>
        <Label text={"Gender"}/><Label text={"Male"}/><Radio/><Label text={"Female"}/><Radio/>
        
        <button onClick={()=>isrendered(false)}>Submit</button>
        
    </div>:<Newrender/>
  );
}

export default App;

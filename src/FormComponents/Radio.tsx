import React from 'react';
import '../App.css';

interface IthirdChildProps {
    updateName: (arg:any,arg1:any) => void
    name:string
    value:string
}

const Radio: React.FC<IthirdChildProps> = ({updateName,name,value})=>{
    return(
       <div>
        <input type="radio" onChange={event=>updateName(event,value)} name={name} value={value} required/>
       </div>

    );
}

export default Radio;
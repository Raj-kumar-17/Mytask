import React from 'react';
import '../App.css';

interface IfourthChildProps {
    updateName: (arg:any,arg1:any) => void
    name:string
    value:string
}

const Radio: React.FC<IfourthChildProps> = ({updateName,name,value})=>{
    return(
       <div>
        <input type="checkbox" onChange={event=>updateName(event,value)} name={name} value={value} required/>
       </div>

    );
}

export default Radio;
import React from 'react';

interface IsecondChildProps {
  updateName: (arg:any,arg1:any) => void
  name:string
  value:string
}

const Drop: React.FC<IsecondChildProps> = ({updateName,name,value})=>{
    return(
       <div className='dropdown'>
        <select onChange={event=>updateName(event,value)} name={name} value={value} required>
          <option value="none"></option>
    <option value="CSE">CSE</option>
  <option value="ECE">ECE</option>
  <option value="EEE">EEE</option>
  <option value="IT">IT</option>
</select>
       </div>

    );
}

export default Drop;
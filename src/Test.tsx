import { useState } from 'react';


export default function Test(){
   const[input,getinput]=useState({
      firstname:'',
      lastname:'',
      department:''
   })

   const func=()=>{
         return <div>Fistname:{input.firstname}
            Lastname:{input.lastname}
            Department:{input.department}
         </div>
      }
 return(
    <div>
   <h1>React Example</h1>
   Firstname:<input onChange={e=>getinput({...input,firstname:e.target.value})}/>
   Lastname:<input onChange={e=>getinput({...input,lastname:e.target.value})}/>
   Dept:<input onChange={e=>getinput({...input,department:e.target.value})}/>
   <button onClick={func}>Submit</button>
    </div>
 );


}
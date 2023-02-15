import { useLocation,useNavigate} from "react-router-dom";
import Inputbox from './FormComponents/Inputbox';
import Label from './FormComponents/Label';
import { useState,useMemo } from "react";


const Newrender=() =>{
  const[bmi,setbmi]=useState({height:0,weight:0})
  const[bmidata,setbmidata]=useState(0)
  const updateName = (event:any):void => {
    const { name, value } = event.target;
          setbmi((prevState) => ({ ...prevState,[name]:value}));
           
    }
   const calculatebmi=()=>{
    const bmivalue:any=(bmi.weight/(bmi.height*bmi.height)).toFixed(1)
    setbmidata(bmivalue)
   }

const mybmi=useMemo(()=>{
return bmidata  
},[bmidata])

  const navigate=useNavigate();
  const location = useLocation();
  const state = location.state.formdata;
  const renderList = state.hobby.map((item:string) => 
                             <>{item} </>
                           );

    return<div className='main'><div className='App'>
      <h1>Welcome {state.firstname} !</h1>
      <p>Firstname: {state.firstname}</p>
      <p>Lastname: {state.lastname}</p>
      <p>Email:{state.email}</p>
      <p>Department: {state.department}</p>
      <p>Gender: {state.gender}</p>
      <p >Hobbies:{renderList}</p>
      <a onClick={()=>navigate(-1)}>Back</a>
    </div>
    <div className="space"></div>
    <div className="bmi">
      <h1>BMI Calculator</h1>
      <Label text={'Height'}/> <Inputbox updateName={updateName} type={'number'}  placeholder={"Height in (meters)"} name="height"  value={bmi.height}/>
      <Label text={'Weight'}/> <Inputbox updateName={updateName} type={'number'} placeholder={"Weight in (kgs)"} name="weight"  value={bmi.weight}/>
       <h2>BMI:{mybmi}</h2>
       <button onClick={calculatebmi}>calculate bmi</button>
    </div>
    </div>
  }
  
  export default Newrender;
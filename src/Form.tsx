import {useState,useEffect, useCallback,useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import Label from './FormComponents/Label';
import Inputbox from './FormComponents/Inputbox';
import Drop from './FormComponents/Drop';
import Radio from './FormComponents/Radio';
import Checkbox from './FormComponents/Checkbox';
import './App.css';

  const Form = ()=>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [formdata,setformdata]=useState({firstname:"",lastname:"",email:"",department:"",gender:"",hobby:[]})
  const [validfirststate,setvalidfirststate]=useState(false)
  const [disabled,setdisabled]=useState(false)
  const navigate=useNavigate()

  const updateName = (event:any):void => {
    const { name, value } = event.target;
    if(event.target.name==="hobby"){
        if(event.target.checked)
          setformdata((prevState) => ({ ...prevState,[name]:[...prevState.hobby,value]}));
        else
        setformdata((prevState) => ({ ...prevState,[name]:[...prevState.hobby.filter((e)=>e!==value)]}));
           
    }
    else
     setformdata((prev)=>({...prev,[name]:value}));
}


const mailValidation=useCallback(()=>{
  if(!formdata.email.match(validRegex)){
    return true;
  }
  else
    return false;
},[formdata.email])

const checkvalid=(e:any)=>{
  e.preventDefault();
  if(formdata.firstname===""||formdata.lastname===""||formdata.department===""||formdata.gender===""||formdata.hobby.length===0||formdata.email===""||mailValidation()){
    navigate("/")
    alert("Error invalid Form")
    setdisabled(true)
    setvalidfirststate(true)
  }
  else{
    navigate(`/welcome/${formdata.firstname}`,{state:{formdata}})
  }
}
const checkData=()=>{
  if(formdata.firstname===""||formdata.lastname===""||formdata.department===""||formdata.gender===""||formdata.hobby.length===0||formdata.email===""||mailValidation()){
   setdisabled(true)
  }
  else{
    setdisabled(false)
  }
}

useEffect(()=>{
 if(validfirststate){
   checkData()
 } 
},[formdata])
  return (
   <div className='main'><div className="App">
      <h2>Form</h2>
      <div className='row'>
        <Label text={"First Name"}/><Inputbox updateName={updateName} type={'text'} placeholder={"first name"} name="firstname" value={formdata.firstname}/>
        </div>
        <div className='row'>
        <Label text={"Last Name"}/><Inputbox updateName={updateName} type={'text'} placeholder={"last name"} name="lastname" value={formdata.lastname}/>
        </div>
        <div className='row'>
        <Label text={"Email"}/><Inputbox updateName={updateName} type={'email'} placeholder={"Email"} name="email" value={formdata.email}/>
        </div>
        <div className='row'>
        <Label text={"Department"}/><Drop updateName={updateName} name="department" value={formdata.department}/>
        </div>
        <div className='row'>
        <Label text={"Gender"}/><div className='radiobtn'><Radio value="Male" updateName={updateName} name="gender"/><Label text={"Male"}/><Radio updateName={updateName} name="gender" value="Female"/><Label text={"Female"}/></div>
        </div>
        <div className='row'>
        <Label text={"Hobbies"}/><div className='checkbox'><Checkbox value="Reading" updateName={updateName} name="hobby"/><Label text={"Reading"}/><Checkbox value="Cricket" updateName={updateName} name="hobby"/><Label text={"Cricket"}/><Checkbox value="Series" updateName={updateName} name="hobby"/><Label text={"Series"}/></div>
        </div>
       <button disabled={disabled} className='submitbtn' onClick={(e)=>checkvalid(e)}>Submit</button>
    </div>
    </div>
    

  );
}

export default Form;
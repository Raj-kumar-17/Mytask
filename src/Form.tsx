import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Label from './FormComponents/Label';
import Inputbox from './FormComponents/Inputbox';
import Drop from './FormComponents/Drop';
import Radio from './FormComponents/Radio';
import Checkbox from './FormComponents/Checkbox';
import './App.css';

  const Form = ()=>{
  const [formdata,setformdata]=useState({firstname:"",lastname:"",department:"",gender:"",hobby:[]})
  const[valid,isvalid]=useState(true)
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
const checkvalid=(e:any)=>{
  e.preventDefault();
  if(formdata.firstname===""||formdata.lastname===""||formdata.department===""||formdata.gender===""||formdata.hobby.length===0){
    isvalid(false);
    navigate("/")
    alert("Fill out all details")
  }
  else{
    navigate(`/welcome/${formdata.firstname}`,{state:{formdata}})
  }
}

  return (
   <div className='main'><div className="App">
      <h2>Form</h2>
      <div className='row'>
        <Label text={"First Name"}/><Inputbox updateName={updateName} placeholder={"first name"} name="firstname" value={formdata.firstname}/>
        </div>
        <div className='row'>
        <Label text={"Last Name"}/><Inputbox updateName={updateName} placeholder={"last name"} name="lastname" value={formdata.lastname}/>
        </div>
        <div className='row'>
        <Label text={"Department"}/><Drop updateName={updateName} name="department" value={formdata.department}/>
        </div>
        <div className='row'>
        <Label text={"Gender"}/><div className='radiobtn'><Radio value="Male" updateName={updateName} name="gender"/><Label text={"Male"}/><Radio updateName={updateName} name="gender" value="Female"/><Label text={"Female"}/></div>
        </div>
        <div className='row'>
        <Label text={"Hobies"}/><div className='checkbox'><Checkbox value="Reading" updateName={updateName} name="hobby"/><Label text={"Reading"}/><Checkbox value="Cricket" updateName={updateName} name="hobby"/><Label text={"Cricket"}/><Checkbox value="Series" updateName={updateName} name="hobby"/><Label text={"Series"}/></div>
        </div>
       {valid&&<button className='submitbtn' onClick={(e)=>checkvalid(e)}>Submit</button>}
    </div>
    </div>
    

  );
}

export default Form;
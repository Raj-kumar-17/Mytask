import { useLocation} from "react-router-dom";
import './App.css';

const Newrender=() =>{
  const location = useLocation();
  const state = location.state.formdata;
  const renderList = state.hobby.map((item:string) => 
                             <div className="checkdiv">{item}</div>
                           );

    return<div className='main'><div className='App'>
      <h1>Welcome {state.firstname} !</h1>
      <p>Firstname: {state.firstname}</p>
      <p>Lastname: {state.lastname}</p>
      <p>Department: {state.department}</p>
      <p>Gender: {state.gender}</p>
      <p className="checkboxdisplay">Hobbies:{renderList}</p>
    </div>
    </div>
  }
  
  export default Newrender;
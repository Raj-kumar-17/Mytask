import '../App.css'

interface IfirstChildProps {
    updateName: (arg:any,arg1:any) => void
    placeholder:string
    name:string
    value:string
  
  }
const Inputbox: React.FC<IfirstChildProps> = ({updateName,placeholder,name,value}) => {
    return(
       <div className='inputbox'>
        <input onChange={event=>updateName(event,value)} type = "text" placeholder={placeholder} name={name} value={value}/>
       </div>
    );
}

export default Inputbox;
import '../App.css'

interface IfirstChildProps {
    updateName: (arg:any,arg1:any) => void
    placeholder:string
    name:string
    value:string|number
    type:string
  }
const Inputbox: React.FC<IfirstChildProps> = ({updateName,placeholder,name,value,type}) => {
    return(
       <div className='inputbox'>
        <input onChange={event=>updateName(event,value)} type={type} placeholder={placeholder} name={name} value={value}/>
       </div>
    );
}

export default Inputbox;
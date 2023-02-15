import styled from "styled-components";
import React from 'react'

interface IfirstChildProps {
    updateName: (arg:string,arg1:string|number) => void
    placeholder:string
    name:string
    value:string|number
    type:string
  }
 const InputBoxStyle:any= styled.input`
 padding:1px;
 `
 const Stylediv:any=styled.div`
 padding:0px 5px;
 `
const Inputbox: React.FC<IfirstChildProps> = ({updateName,placeholder,name,value,type}) => {
    return(
        <Stylediv>
        <InputBoxStyle onChange={event=>updateName(event,value)} type={type} placeholder={placeholder} name={name} value={value}/>
        </Stylediv>
    );
}

export default Inputbox;
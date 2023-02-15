import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Navbar() {

    const NavStyle=styled.div`
    background:#000;
    height:60px;
    color:white;

    `

    const NavbarStyle=styled(NavLink)`
    color:white;
    text-decoration:none;
    padding:15px;
    font-weight:bold
    `
const LinkStyle=styled.div`
display:flex;
align-item:center;
justify-content:space-between;
'

`
  return (
   <NavStyle>
    <LinkStyle>
<NavbarStyle to="/">Home</NavbarStyle>
<NavbarStyle to="/form">Form</NavbarStyle>
</LinkStyle>

</NavStyle>

  

          
    
  );
}
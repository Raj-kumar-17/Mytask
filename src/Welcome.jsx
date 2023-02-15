import styled from "styled-components"

const HeaderStyle=styled.h1`
text-align:center;
`

const MainDiv=styled.div`
height:100vh;


`

export default function Welcome(){
    return(<MainDiv><HeaderStyle>Welcome Page</HeaderStyle></MainDiv>)
}
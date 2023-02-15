import axios from 'axios'
import styled from 'styled-components'
import { useEffect,useState } from 'react'


export default function AxiosData(){


    type apidata={
        userId:number;
        id:number;
        title:string;
        body:string;
    }
    const[data,setData]=useState([])

    const printAxiosData=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>setData(res.data))      
    }

    const DataStyle=styled.div`
width:1000px;
height:1000px;
background:#4682B4;
color:white;
display:flex;
align-items: center;
justify-content:center;
flex-direction: column;
border-radius: 5px;
margin-top:60px;

`

useEffect(()=>{
printAxiosData()
},[])

    return(
    <DataStyle>   
        <>
          <h2>Axios Data</h2>
          {data.slice(0,5).map((e:apidata)=> {
            return  <li>Title:{e.title}</li>
        }
        )}
          </>
    </DataStyle>
    );
}
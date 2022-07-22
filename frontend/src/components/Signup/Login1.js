import styled from "styled-components";



export const Mainbox=styled.div`
border:1px solid red;
height:350px;
width:750px;
margin:auto;
border-radius:10px;
background:white;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
z-index:12;
margin-top:10%;
display:flex;
`



export const Slider1=styled.div`
border:1px solid black;
width:50%;
height:100%;
margin-top:5%;

img{
    margin-left:35%;
}
h3{
   margin:20px;
   text-align:center;
}
p{
    text-align:center;
    font-size:12px;
}
`

export const Slider2=styled.div`

border:1px solid black;
width:50%;
height:100%;
p{
    text-align:center;
    font-size:12px;
    margin-top:3%;
}


`

export const LoginButton=styled.button`

width:80%;
height:40px;
background:#ff6f61;
color:white;
margin-left:10%;
border:none;
border-radius:5px;

`
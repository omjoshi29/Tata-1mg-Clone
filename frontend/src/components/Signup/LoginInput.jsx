import React from 'react'
import Button from "../Button"
import{LoginButton} from "./Login1"
import axios from 'axios'
import{userotp,username} from "../../Redux/action"
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
export const LoginInput = () => {
    const[number,setNumber]=React.useState()
    let navigate = useNavigate();
    const ref1=React.useRef()
    const state=useSelector((state)=>state)
    const dispatch=useDispatch()
    console.log(state,"chevk intial valie")

    const sendData=()=>{
        console.log(number)
        axios.post("http://localhost:8080/signup",{mobile:number})
        .then((data)=>{
            console.log(data,"recieved")
            console.log(data.data)
            dispatch(userotp(data.data.otp))
            dispatch(username(number))
            
        })
        // dispatch(userotp("12345"))
        // dispatch(username(number))
        // navigate("/otp",{replace:true})
        
    }


  return (
        <div>
        <h2>Login</h2>
        <p>Get access to your orders, lab tests & doctor consultations</p>

        <div>
            <input placeholder='Enter Mobile Number' type ="Number" ref={ref1} style={{borderTop:"none",borderLeft:"none",borderRight:"none",width:"80%",margin:"10%"}} onChange={(e)=>setNumber(e.target.value)}/>
        </div>

        <LoginButton onClick={sendData}>Login</LoginButton>
        
    </div>

  )
}

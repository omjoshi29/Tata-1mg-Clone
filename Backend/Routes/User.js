const {Router}=require("express")
const User=require("../Mongo/usermongo")
const Auth=Router()
const {Otpgenereator,verfieddata}=require("../control/twilio")
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
require("dotenv").config()


console.log(process.env.TWILIO_ACCOUNT_SID)



Auth.post("/signup",async(req,res)=>{

    const{mobile}=req.body;

    let data=Otpgenereator()

    client.messages
  .create({
     body: `welcome to 1mg your otp is ${data}`,
     from: '+17163254683',
     to: `+91${mobile}`
   })
  .then((message) => {console.log(message)
    console.log("otp codneas")
    res.status(200).send({otp:data,username:mobile,message:"otp sent successfully"})})
  .catch((e)=>{console.log(e)
   res.send({otp:"",username:"",message:"invalid number"})})

    
})


Auth.post("/signupverfied",async(req,res)=>{

    let{username}=req.body

let data=await verfieddata(username)
console.log(data,"recieved")
res.status(200).send({data:data,message:"verified successfully"})
})



module.exports=Auth
const {Router}=require("express")
const User=require("../Mongo/usermongo")
const Auth=Router()
const {Otpgenereator,verfieddata}=require("../control/twilio")
const {getTokens1,mydata}=require("../control/googleAuth")
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

    res.status(200).send({otp:data,username:mobile,message:"otp sent successfully"})})
  .catch((e)=>{console.log(e)
   res.send({otp:"",username:"",message:"invalid number"})})
  
})


Auth.post("/signupverfied",async(req,res)=>{

let{username}=req.body

let data=await verfieddata(username)

return res.cookie("access_token",12334323,{
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
}).status(200)
.json({data:data,message:"verified successfully"});
// console.log(data,"recieved")
// res.status(200).send({data:data,message:"verified successfully"})
})

Auth.get("/checkcookies",(req,res)=>{
  console.log(req.cookies)
  const token = req.cookies.access_token;
  console.log(token,"yes it is coming")

  res.send(token)
})

Auth.get("/google",(req,res)=>{
  res.send("<a href='https://accounts.google.com/o/oauth2/auth?approval_prompt=force&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&client_id=963158881727-8o2e3581vklmm9r9jf59v35u3hl47vmm.apps.googleusercontent.com&redirect_uri=http://localhost:8080/google/callback&response_type=code&access_type=offline'>Login with google</a>")
  
})

Auth.get("/google/callback",async(req,res)=>{
  const code=req.query.code;

  if(req.query.error)
  {
      return res.send("error occured"+ req.query.error_description)
  }

  const { id_token, access_token } = await getTokens1({
      code,
      clientId: "963158881727-8o2e3581vklmm9r9jf59v35u3hl47vmm.apps.googleusercontent.com",
      clientSecret: "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",
      redirectUri: "http://localhost:8080/google/callback",
    });

    console.log(access_token,"testing tinshhahw")

    const data=await mydata(id_token,access_token)
    console.log(data,"viewing!!")
    console.log("heloooeas")
  // const userObjectId = mongoose.Types.ObjectId(data._id)
  // await Blacklist.insertMany({user_id:userObjectId})
  res.send(data)
  // res.redirect(`http://localhost:3000/afterOuth/${data._id}`)

})


module.exports=Auth
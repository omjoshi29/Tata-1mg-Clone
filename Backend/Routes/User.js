const {Router}=require("mongoose")
const User=require("../Mongo/usermongo")
const Auth=Router()




Auth.get("/signup",(req,res)=>{
    res.status(200).send("Auth Login page")
})


Auth.post("/login",(req,res)=>{
    res.status(200).send("Auth sign up page")
})



module.exports=Auth
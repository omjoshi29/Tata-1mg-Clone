const express=require("express")
const mongoose=require("mongoose")
const connect=mongoose.connect("mongodb+srv://App123:App123@cluster0.56dvjei.mongodb.net/onemg?retryWrites=true&w=majority")
const app=express()
const cors=require("cors")
require("dotenv").config()
const Auth=require("./Routes/User")
const Products=require("./Routes/Product")
const Prod=require("./Mongo/productsmongo")





app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/",Auth)

app.use("/",Products)

app.get("/",(req,res)=>{
    res.send("welcome to 1mg website")
})



app.listen(8080,async()=>{
    await connect
    console.log("server started")
})
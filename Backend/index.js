const express=require("express")
const mongoose=require("mongoose")
const connect=mongoose.connect("mongodb+srv://App123:App123@cluster0.56dvjei.mongodb.net/onemg?retryWrites=true&w=majority")
const app=express()
const cors=require("cors")


app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get("/",(req,res)=>{
    res.status(200).send("hello to our 1mg site backend!!")
})



app.listen(8080,async()=>{
    await connect
    console.log("server started")
})
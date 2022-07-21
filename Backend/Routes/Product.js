const {Router}=require("express")
const Prod=require("../Mongo/productsmongo")
const Products=Router()


//getting all product data
//http://localhost:8080/alldata
Products.get("/alldata",async(req,res)=>{

    let data=await Prod.find({})

    res.send({data:data,message:"request successfull"})
})

//getting specfic product data by productname
//`http://localhost:8080/data/${productname}`
Products.get("/data/:productName",async(req,res)=>{

    let value=req.params.productName
    console.log(value)
    let data=await Prod.findOne({productName:value})

    res.send({data:data,message:"request successfull"})
})

//filtering the products 
//`http://localhost:8080/filter?&brand=${brandname}` //give data of partcular brand
//`http://localhost:8080/filter?&discount=${10}` //show all products with dicount >= number
//`http://localhost:8080/filter?&rating=${4}`  //show all products with rating >= number

Products.get("/filter",async(req,res)=>{

    let data;
    if(req.query.brand)
    {
        data=await Prod.find({brand:req.query.brand})
        
    }
    else if(req.query.discount)
    {
        console.log(req.query.discount,"check num")
        data=await Prod.find({discount:{$gt:req.query.discount}})
    }
    else if(req.query.ratings)
    {
        console.log(req.query.ratings,"check num")
        data=await Prod.find({ratings:{$gte:req.query.ratings}})
        console.log(data,"hreee1121")
    }

    

    res.send({data:data,message:"filtered successfully"})

})




module.exports=Products


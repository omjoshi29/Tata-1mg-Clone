const {Router}=require("express")
const mongoose=require("mongoose")
const Cartdata=Router()


const Cart=require("../Mongo/Cart")


Cartdata.post("/postcart",async(req,res)=>{
    const {username,_id}=req.body
    const userObjectId = mongoose.Types.ObjectId(_id);
    let check=await Cart.findOne({username})
    if(check)
    {
        await Cart.updateOne({username},{$push:{"product_id":userObjectId}})
        let mydata=await Cart.findOne({username})

        res.send({data:mydata,"message":"posted already successfully"})
    }
    else
    {
        let data=new Cart({
            username,
            "product_id":[userObjectId]
        })
        await data.save()
        
        res.send({data:data,"message":"posted successfully"})
    }
})

//ObjectId("62d8f8e15d76776ce66ef2c0")

Cartdata.get("/getcart/:username",async(req,res)=>{
    const {username}=req.params

    let data=await Cart.aggregate([{$match:{username:username}},{$lookup:{from:"prodmgs",localField:"product_id",foreignField:"_id",as:"cats"}}])

    console.log(data)

    let total=0;
    data[0].cats.map((ele)=>{
        total=total+ele.price
    })

    await Cart.updateOne({username},{Total:total})
    res.send({data:data,Total:total,message:"data successfull"})

})

Cartdata.post("/updatequant",async(req,res)=>{
    const{quant,_id,username}=req.body

    let data=await Cart.aggregate([{$match:{username:username}},{$lookup:{from:"prodmgs",localField:"product_id",foreignField:"_id",as:"cats"}}])

    let total=0;
    data[0].cats.map((ele)=>{
        if(ele._id==_id)
        {
            total=total+(ele.price*quant)
        }
        else
        {
            total=total+ele.price
        }
    })
    await Cart.updateOne({username},{Total:total})
    res.send({data:data,Total:total,message:"data successfull"})
})


Cartdata.post("/removequant",async(req,res)=>{
    const {_id,username}=req.body;

    // console.log(_id)
    let data=await Cart.findOne({username})
    // console.log(data.product_id)

    let newdata=data.product_id.filter((ele)=>ele==_id)
    // console.log(newdata,"yee")

    await Cart.updateOne({username},{"product_id":newdata})

    let data1=await Cart.findOne({username})
    // console.log(data1,"seeatleast")

    let data3=await Cart.aggregate([{$match:{username:username}},{$lookup:{from:"prodmgs",localField:"product_id",foreignField:"_id",as:"cats"}}])


    let total=0;
    data3[0].cats.map((ele)=>{
        total=total+ele.price
    })
    await Cart.updateOne({username},{Total:total})

    res.send({data:data3,Total:total,message:"data successfull"})
})


module.exports=Cartdata
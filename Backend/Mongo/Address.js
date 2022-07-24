const mongoose=require("mongoose")



const AddressSchema=mongoose.Schema({
    username:String,
    address:String,
    city:String,
    pincode:Number,
    mobilenumber:Number,
    locality:String
})

const Address=mongoose.model("addressmg",AddressSchema)


module.exports=Address
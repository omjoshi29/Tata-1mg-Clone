const mongoose=require("mongoose")



const AddressSchema=mongoose.Schema({
    username:String,
    address1:String,
    address2:String,
    city:String,
    pincode:String


})

const Address=mongoose.model("addressmg",AddressSchema)


module.exports=Address
const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    title:String,
    description:String,
    category:String,
    price:Number
})

module.exports= mongoose.model("products",productSchema)
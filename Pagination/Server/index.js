import express from "express";
import mongoose from "mongoose";
import ProductModel from "./Models/ProductModel.js";
import productData from "./Models/product.js"
const app=express();

console.log(productData)

mongoose.connect("mongodb+srv://aparna:EsYIWVbUm5p6yfpG@cluster0.ilug8qi.mongodb.net/productsDetails?appName=Cluster0")
.then( async (result)=>{
    console.log("DB is connected")
    await addData();
}).catch((err)=>{
    console.log(" Error in DB ",err);
})

async function addData(){
    try{
      const count= await ProductModel.countDocuments();
      if(count>=15){
        console.log("product data is already insert...")
        return
      }
      await ProductModel.insertMany(productData)
    }catch(err){
        console.log("Product data is not insert in DB")
    }
}

app.get("/getProducts",async (req,res)=>{
    // http://localhost:3000/getProducts
// http://localhost:3000/getProducts?page=3&limit=5&skip=3

    let page=parseInt( req.query.page) || 1;
    let limit=5 ;
    let category=req.query.category || "Home"
    let skip=(page-1)*limit;
try{
    const result = await ProductModel.find({category:category}).skip(skip).limit(limit)

    res.status(200).json({products:result,currentpage:page})
}
catch(err){
    res.status(500).json({error:err})
}
})

app.listen(3000,(err)=>{
    if(err){
        console.log("server Error ",err)
    }else{
        console.log("Server is running at port 3000")
    }
})

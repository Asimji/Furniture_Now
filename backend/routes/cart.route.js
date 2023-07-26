const express=require("express");
const auth = require("../middleware/auth.middleware");
const cartModel = require("../models/cart.model");

const cartRoute=express.Router();

cartRoute.use(auth);

cartRoute.post('/create',async(req,res)=>{
    let existedData=req.body.description
    if(req.body.quantity>1){
        req.body.quantity=1
    }
        try {
            let checkData=await cartModel.findOne({description:existedData})
            if(checkData){
                res.status(200).json({msg:"Product Already In Your Cart"})
            }
            else{
                let cart=new cartModel(req.body);
                await cart.save();
                res.status(200).json({cart,msg:"Successfully Added in Your Cart"})
            }
            
        } catch (error) {
            res.status(400).json({error:error.message})
        }
    
})

cartRoute.get("/",async(req,res)=>{
    const userId=req.body.userId
    try {
        let cart=await cartModel.find({userId})
        res.status(200).json({cart})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

cartRoute.patch("/update/:id",async(req,res)=>{
    const {id}=req.params;
    const userIdinDoc=req.body.userId
    try {
        const cart=await cartModel.findOne({_id:id});
        if(userIdinDoc===cart.userId){
            await cartModel.findByIdAndUpdate({_id:id},req.body);
            console.log(cart,cart.quantity)
            res.status(200).json({msg:`${cart.quantity} Quantity Successfully Updated`})
        }
        else{
            res.status(200).json({msg:"userId not Matched"})
        }

    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

cartRoute.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    const userIdinDoc=req.body.userId
    try {
        const cart=await cartModel.findOne({_id:id});
        if(userIdinDoc===cart.userId){
            await cartModel.findByIdAndDelete({_id:id});
            console.log(cart,cart.quantity)
            res.status(200).json({msg:`${cart.brand}  Successfully Deleted`})
        }
        else{
            res.status(200).json({msg:"userId not Matched"})
        }

    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

cartRoute.delete("/deleteall/:userIdinDoc", async (req, res) => {
    const { userIdinDoc } = req.params;
    try {
      const cart = await cartModel.findOne({ userId: userIdinDoc });
      if (cart) {
        await cartModel.deleteMany({ userId: userIdinDoc });
        res.status(200).json({ msg: `All data for userId ${cart.userName} Successfully Deleted` });
      } else {
        res.status(400).json({ msg: "No data found for the given userId" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

module.exports=cartRoute
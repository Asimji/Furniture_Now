const express=require("express");
const bcrypt=require('bcrypt');
const userModel = require("../models/user.model");
var jwt = require('jsonwebtoken');
const blacklist = require("../blacklist");
const userRouter=express.Router();

userRouter.post('/signup',async(req,res)=>{
    const {email,password,Full_Name,phone,age}=req.body;
    if(password.length>5 && phone.length===10){
  try {
    bcrypt.hash(password, 3,async (err, hash)=> {
        // Store hash in your password DB.
        if(hash){
            const user=new userModel({Full_Name,email,password:hash,age,phone})
            await user.save()
     res.status(200).json({msg:`${Full_Name} is Successfully Register`})
        }
        else{
            res.status(200).json({error:err.message})
        }
    });

  } catch (error) {
    res.status(400).json({error:error.message})
  }
    }
    else{
        res.status(200).json({mg:"Password length is Below Level OR Incorrect Mobile No."})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    
    try {
        const user=await userModel.findOne({email});
        if(user){
            bcrypt.compare(password, user.password, (err, result)=> {
                // result == true
                if(result){
                    var token = jwt.sign({ ...user },"furniture");
                    res.status(200).json({msg:`Welcome ${user.Full_Name} You are Now Login`,token})
                }
                else{
                    res.status(200).json({msg:"Incorrect Password"})
                }
            });
        }
        else{
            res.status(200).json({msg:'User not Exist'})
        }
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

userRouter.get("/logout",async(req,res)=>{
    const token=req.headers.authorization.split(" ")[1];
    try {
            if(token){
            if(blacklist.includes(token)){
                res.status(200).json({msg:"Already Logout"})
            }
            else{
                blacklist.push(token);
                res.status(200).json({msg:"Logout Successfully"})
            }
        } 
        else{
            res.status(200).json({msg:"You are Not Authorised"})
        }
    }
    catch (error) {
        res.status(400).json({error:error.message})
    }
})


module.exports=userRouter
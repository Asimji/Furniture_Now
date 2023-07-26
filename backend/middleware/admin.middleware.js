const blacklist = require("../blacklist");
require("dotenv").config()
const jwt=require("jsonwebtoken")

const adminAuth=(req,res,next)=>{
const token=req.headers.authorization?.split(" ")[1];
if(token){
    try {
        if(blacklist.includes(token)){
            res.status(200).json({msg:"Already Logout please Login!"})
        }
        else{
            var decoded = jwt.verify(token,"furniture");
            if(decoded._doc.Full_Name==='Admin' && decoded._doc.email==='admin@gmail.com'){
                next()
            }
            else{
                res.status(200).json({msg:"Your are not Admin"})
            }
        }
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
else{

    res.status(400).json({msg:"Unauthorised & Hello"})
}

}

module.exports=adminAuth
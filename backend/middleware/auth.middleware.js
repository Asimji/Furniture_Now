const blacklist = require("../blacklist");
const jwt=require("jsonwebtoken")
require("dotenv").config()

const auth=(req,res,next)=>{
const token=req.headers.authorization?.split(" ")[1];
if(token){
    try {
        if(blacklist.includes(token)){
            res.status(200).json({msg:"Already Logout please Login!"})
        }
        else{
            var decoded = jwt.verify(token, "furniture");
            req.body.userName=decoded._doc.Full_Name
            req.body.userId=decoded._doc._id
            next()
        }
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
else{
    res.status(400).json({msg:"Unauthorised"})
}

}

module.exports=auth
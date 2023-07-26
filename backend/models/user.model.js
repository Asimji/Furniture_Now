const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    Full_Name:{
        type:String,
        require:true
    },
    age:{
   type:Number,
   require:true
    },
    mobile:{
        type:String,
        require:true
    }
},{
    versionKey:false
})

const userModel=mongoose.model("users",userSchema);

module.exports=userModel
const mongoose=require("mongoose");

const cartSchema=mongoose.Schema({
    brand:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    userId:String,
    userName:String,
   

},{
    versionKey:false
}
)

const cartModel=mongoose.model("cart",cartSchema);

module.exports=cartModel
const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
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
    }

},{
    versionKey:false
})

const productModel=mongoose.model("products",productSchema);

module.exports=productModel
const express=require("express");
const connection = require("./db");
const userRouter = require("./routes/user.route");
const productRouter = require("./routes/product.route");
const cors=require("cors");
const cartRoute = require("./routes/cart.route");

require('dotenv').config();

const app=express();
app.use(cors())

app.use(express.json());

app.use("/cart",cartRoute)
app.use("/user",userRouter)
app.use("/product",productRouter)

app.listen(process.env.port,async()=>{

    try {
        await connection
        console.log("DB is connected")
        console.log(`Server is running ar ${process.env.port}`)
    } catch (error) {
        console.log(error)
    }
})
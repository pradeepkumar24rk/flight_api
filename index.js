const express = require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
var cors=require('cors');
app.use(cors());


//routers
const userRouter=require("./routers/user");

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log(err);
})

app.use(express.json());

//api
app.use("/api/user",userRouter);

app.listen(5000,()=>{
    console.log("Server Started");
})
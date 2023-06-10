const express = require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
var cors=require('cors');
app.use(cors());


//routers
const userRouter=require("./routers/user");
const AdminRouter=require("./routers/admin");
const Booking=require("./routers/booking");
const Flight=require("./routers/flight");

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
app.use("/api/admin",AdminRouter);
app.use("/api/booking",Booking);
app.use("/api/flight",Flight);




app.listen(5000,()=>{
    console.log("Server Started");
})
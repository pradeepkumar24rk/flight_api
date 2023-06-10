const router=require("express").Router();
const Booking=require("../models/Booking");

router.post('/book',async(req,res)=>{
    const newBooking=new Booking(req.body);
    try{
        const saveBook=await newBooking.save();
        res.status(201).json(saveBook);
    }
    catch(err){
        res.status(500).json(err);
    }
})

router.get('/book',async(req,res)=>{
    try{
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports=router
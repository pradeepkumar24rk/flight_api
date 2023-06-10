const router=require("express").Router();
const Booking=require("../models/Booking");

router.post('/postBook',async(req,res)=>{
    const newBooking=new Booking(req.body);
    try{
        const saveBook=await newBooking.save();
        res.status(201).json(saveBook);
    }
    catch(err){
        res.status(500).json(err);
    }
})

router.get('/getBook',async(req,res)=>{
    try{
        const data=await Booking.find();
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports=router
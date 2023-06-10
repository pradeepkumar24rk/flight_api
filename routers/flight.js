const router=require('express').Router();
const Flight=require('../models/Flights');



router.post('/postFlight',async(req,res)=>{
    const newFlight=new Flight(req.body);
    try{
        const saveFlight=await newFlight.save();
        res.status(201).json(saveFlight);
    }
    catch(err){
        res.status(500).json(err);
    }
})



router.get('/getFlight',async(req,res)=>{
    try{
        const data=await Flight.find();
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;
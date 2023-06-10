const router = require('express').Router();
const User=require('../models/User');

router.get('/login', async(req, res) => {
    try{
        const data=await User.findOne({emailid:req.body.emailid});
        {!data && res.status(401).json("Wrong credential")}
        {data.password!==req.body.password && res.status(401).json("Wrong credential")}
        res.status(200).json("Login successfully");
    }
    catch(err){
        res.status(500).json(err);
    }
})


router.post('/register',async(req,res)=>{
    const newUser=new User({
        emailid:req.body.emailid,
        password:req.body.password,
    })
    try{
        const savedUser=await newUser.save();
        res.status(201).json(savedUser);
    }
    catch(err){
        res.status(500).json(err);
    }
})


module.exports=router
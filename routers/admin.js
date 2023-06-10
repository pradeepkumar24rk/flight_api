const router = require('express').Router();
const Admin=require('../models/Admin');

router.get('/login', async(req, res) => {
    try{
        const data=await Admin.findOne({userid:req.body.userid});
        {!data && res.status(401).json("Wrong credential")}
        {data.password!==req.body.password && res.status(401).json("Wrong credential")}
        res.status(200).json("Login successfully");
    }
    catch(err){
        res.status(500).json(err);
    }
})



module.exports=router
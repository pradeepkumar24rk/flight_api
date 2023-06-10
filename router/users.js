const router = require('express-router')()


router.use('/data',(req,res)=>{
    res.send('Hello All From Users')
})
const mongoose=require("mongoose");

const BookingSchema=new mongoose.Schema({
    emailid:{type:String,require:true},
    date:{type:String,require:true},
    place:{
        from:{type:String,require:true},
        to:{type:String,require:true},
        
    },
    ticket:[
        {
            name:{type:String,require:true},
            age:{type:Number,require:true},
            sex:{type:String,require:true},
        }
    ],
    flightid:{type:String,require:true},
    total:{type:Number,require:true},
})
module.exports=mongoose.model("Booking",BookingSchema);
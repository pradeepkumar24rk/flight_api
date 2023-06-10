const mongoose=require("mongoose");

const FlightSchema=new mongoose.Schema({
    name:{type:String,require:true},
    date:{type:String,require:true},
    time:{type:String,require:true},
    place:{
        from:{type:String,require:true},
        to:{type:String,require:true},
    },
})

module.exports=mongoose.model("Flights",FlightSchema);
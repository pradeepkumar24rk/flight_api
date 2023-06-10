const mongoose=require("mongoose");

const FlightSchema=new mongoose.Schema({
    name:{type:String,require:true},
    date:{type:String,require:true},
    time:{type:String,require:true},
    place:{type:String,require:true}
})

module.exports=mongoose.model("Flight",FlightSchema);
const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema(
    {
        emailid:{type:String,require:true,unique:true},
        password:{type:String,require:true},
    }
)

module.exports=mongoose.model("User",UserSchema);
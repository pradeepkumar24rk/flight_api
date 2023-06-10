const mongoose=require("mongoose");

const AdminSchema=new mongoose.Schema(
    {
        userid:{type:String,require:true,unique:true},
        password:{type:String,require:true},
    }
)

module.exports=mongoose.model("Admin",AdminSchema);
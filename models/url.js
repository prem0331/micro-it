const mongoose=require("mongoose");
const urlSchema=new mongoose.Schema({
    shortID:{
        type:String,
        required:true,
        unique:true,
    },
    redirectURL:{
        type:String,
        required:true,
    },
    visithistory:[{ timestamp:{type:Number}}],
},
   {timestamps:true}
);
const URL=mongoose.model("url",urlSchema);
module.exports=URL;
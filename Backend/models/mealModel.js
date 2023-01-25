const mongoose=require("mongoose");

const mealSchema=new mongoose.Schema({
    userid:{
        type:mongoose.ObjectId,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    calories:{
        type:Number,
        required:true,
    },
    proteins:{
        type:Number,
        required:true,
    },
    fats:{
        type:Number,
        required:true,
    },
});


module.exports=mongoose.model("Meal",mealSchema);
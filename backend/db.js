const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/paytm");

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minLength:8 
    },
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    // if u want it simple you can write like username:String that's it
});

const accountSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
});

const User=mongoose.model("User",userSchema);
const Account=mongoose.model("Account",accountSchema);


module.exports={
    User,Account
};
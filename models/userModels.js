const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    fname:{
        type: String,
    },
    lname:{
        type: String,
    },
    password:{
        type: String,
    },
    email:{
        type: String,
    },
    isAdmin :{
        type: Boolean,
        default: false
    },
    profilePic:{
        type:String,
        default:''
    }
});

module.exports= mongoose.model("user",userSchema);
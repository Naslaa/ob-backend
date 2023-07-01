const mongoose = require('mongoose');

const connectDB =() => {
    //connect to databse
    mongoose.connect(process.env.DB_URL).then(()=> {
        console.log("DB connected"+ process.env.DB_URL);
    });
   
};
module.exports = connectDB;
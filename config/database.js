const  mongoose = require('mongoose');
require("dotenv").config();

const connectwithDB=()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("Connected with Databases Server"))
    .catch((error)=>{
        console.log("DB Facing Connection Issues");
        console.log(error);
        process.exit(1);
    })
};

module.exports=connectwithDB;
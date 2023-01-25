const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

db.on("connected",()=>{
        console.log("MongoDb connected successfully");
});

db.on("error",()=>{
    console.log("MongoDb Connection Failed");
});
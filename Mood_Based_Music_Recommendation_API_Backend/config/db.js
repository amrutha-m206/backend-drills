let mongoose=require('mongoose');
require('dotenv').config();


const connectDB=async()=>{
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Connected to MongoDB");
    
})
}

module.exports=connectDB;
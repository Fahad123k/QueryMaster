const expressEjsLayouts = require('express-ejs-layouts');
const mongoose=require('mongoose');
// for prevent for warning
mongoose.set('strictQuery',false)
const connectdb= async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);   
    }
}

module.exports=connectdb;
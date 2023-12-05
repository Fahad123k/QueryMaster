require('dotenv').config();
const express= require("express");
const expressLayout=require("express-ejs-layouts");
const app=express();

const PORT=7000|| process.env.PORT;

// middlewere
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// static files
app.use(express.static('public'));

// Template Engine
app.use(expressLayout);
app.set('layout','./layout/main');
app.set('view engine','ejs');

// router here
app.use('/',require('./server/routes/index'))

app.listen(PORT,()=>{
    console.log(`app is listion on ${PORT} : http://localhost/${PORT}`)
})





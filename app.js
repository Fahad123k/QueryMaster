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
app.set('layout','./layouts/main');
app.set('view engine','ejs');

// Router here
app.use('/',require('./server/routes/index'))
app.use('/',require('./server/routes/dashboard'))
// app.get('*',(req,res)=> res.status(404).send("404 Page not found"));
app.get('*',(req,res)=> res.status(404).render('404'));

app.listen(PORT,()=>{
    console.log(`app is listion on ${PORT} : http://localhost/${PORT}`)
})





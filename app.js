require('dotenv').config();

const express= require("express");
const expressLayout=require("express-ejs-layouts");
const connectDB= require('./server/config/db');
const session=require('express-session');
const passport=require('passport');
const MongoStore=require('connect-mongo');
const app=express();

const PORT=7000|| process.env.PORT;

app.use(session({
    secret:"keyboard cat",
    resave:false,
    saveUninitialized:true,
    store:MongoStore.create({
        mongoUrl:process.env.MONGODB_URI
    })
}))
// middlewere
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// passport
app.use(passport.initialize());
app.use(passport.session());

connectDB();

// connect to db

// static files
app.use(express.static('public'));

// Template Engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

// Router here
app.use('/',require('./server/routes/auth'))
app.use('/',require('./server/routes/index'))
app.use('/',require('./server/routes/dashboard'))

// app.get('*',(req,res)=> res.status(404).send("404 Page not found"));
app.get('*',(req,res)=> res.status(404).render('404'));

app.listen(PORT,()=>{
    console.log(`app is listion on ${PORT} : http://localhost/${PORT}`)
})






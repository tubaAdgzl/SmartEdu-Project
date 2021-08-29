const express = require('express');
const ejs = require('ejs')
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const methodOverride = require("method-override")
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');
const app = express()

//connect DB
mongoose.connect('mongodb://localhost/smartedu-db',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
})

//GLOBAL VARIABLE
global.userIN = null;

// TEMPLATE ENGINE
app.set("view engine","ejs")

//MIDDLEWARES
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/smartedu-db' }),
  }))

app.use(flash());
app.use((req,res,next)=>{
    res.locals.flashMessages = req.flash();
    next();
})

app.use(
    methodOverride("_method",{
        methods:["POST","GET"]
    })
)

//ROUTES
app.use('*',(req,res,next)=>{
    userIn = req.session.userID;
    next();
})

app.use("/",pageRoute)
app.use("/courses",courseRoute)
app.use("/categories",categoryRoute)
app.use("/users",userRoute)

const PORT = 3000

app.listen(PORT,() =>{
    console.log(`Sunucu ${PORT} portunda başlatıldı`)
})
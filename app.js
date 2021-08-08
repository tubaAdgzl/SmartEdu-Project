const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs')
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const app = express()

//connect DB
mongoose.connect('mongodb://localhost/smartedu-db',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
})

// TEMPLATE ENGINE
app.set("view engine","ejs")

//MIDDLEWARES
app.use(express.static("public"))

//ROUTES
app.use("/",pageRoute)
app.use("/courses",courseRoute)


const PORT = 3000

app.listen(PORT,() =>{
    console.log(`Sunucu ${PORT} portunda başlatıldı`)
})
const express = require('express');
const ejs = require('ejs')
const pageRoute = require('./routes/pageRoute');
const app = express()

app.set("view engine","ejs")
app.use(express.static("public"))

app.use("/",pageRoute)


const PORT = 3000

app.listen(PORT,() =>{
    console.log(`Sunucu ${PORT} portunda başlatıldı`)
})
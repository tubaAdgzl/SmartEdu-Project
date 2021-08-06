const express = require('express');
const app = express()

app.get("/", (req,res) =>{
    res.send("Index sayfası")
})

const PORT = 3000

app.listen(PORT,() =>{
    console.log(`Sunucu ${PORT} portunda başlatıldı`)
})
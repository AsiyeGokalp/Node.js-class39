"use strict"

const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req,res) => {
  res.setHeader("Content-type","text/plain")
  res.send("hello from backend to frontend!")
})

app.post('/weather',(req,res) => {
  const city = req.body.cityName
  if(!city){
    return res.status(400).json({msg:'City not found!'})
  }
  res.send(city)
})




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
"use strict"

import fetch from "node-fetch"
import keys from "./sources/keys.js"
import express from "express"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.setHeader("Content-type", "text/plain")
  res.send("hello from backend to frontend!")
})

app.post("/weather", async (req, res) => {
  const city = req.body.cityname
  if (!city) {
    return res.status(400).json({ msg: "City not provided!" })
  }
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${keys}`
    )
    const data = await response.json()
    res.json({ msg: `${data.name} is today ${data.main.temp}°C` })
  } catch (error) {
    throw error
  }
})

export default app

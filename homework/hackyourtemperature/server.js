"use strict"
import app from "./app.js"
import express from "express"

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server running on port ${PORT}`))

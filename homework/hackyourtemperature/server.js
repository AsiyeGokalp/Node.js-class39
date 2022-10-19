"use strict"
import app from "./app.js"
import express from "express"

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server running on port ${PORT}`))


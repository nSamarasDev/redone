const morgan = require('morgan')
const express = require('express')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const colors = require('colors')

const PORT = process.env.PORT || 5050

const app = express()

connectDB()

app.use(express.json({ extended: false }))

app.use(cookieParser())

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}

///////
app.listen(PORT, () => console.log(`Server running on ${PORT}`))
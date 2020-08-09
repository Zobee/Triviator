const express = require('express')
const moment = require('moment')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})
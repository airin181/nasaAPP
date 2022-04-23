const express = require('express')
const app = express()
const port = 3000


//cambiar a donde estén los fetch
const fetch = require('node-fetch') 
const env = require("dotenv").config();



app.listen(port, () => {
    console.log(`NasaAPP listening at http://localhost:${port}`)
})
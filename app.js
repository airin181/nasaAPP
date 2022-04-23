const express = require('express')
const app = express()
const port = 3000


const fetch = require('node-fetch') //cambiar a donde estén los fetch



app.listen(port, () => {
    console.log(`NasaAPP listening at http://localhost:${port}`)
})
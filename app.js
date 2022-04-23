require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT;

const routes = require('./routes/routes.js');
app.use('/api/astronomy', routes) 


app.listen(port, () => {
    console.log(`NasaAPP listening at http://localhost:${port}`)
})
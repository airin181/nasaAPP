require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT;


//cambiar a donde estén los fetch
/* const fetch = require('node-fetch')  */

const routes = require('./routes/routes.js');
app.use('/', routes) 


app.listen(port, () => {
    console.log(`NasaAPP listening at http://localhost:${port}`)
})
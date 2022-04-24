require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT;
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const landingRoutes = require('./routes/landings-routes');
app.use('/api/astronomy', landingRoutes) 



app.listen(port, () => {
    console.log(`NasaAPP listening at http://localhost:${port}`)
})
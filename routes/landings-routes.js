const express = require('express');
const routes = express.Router();

const landing = require('../controllers/landings-controllers')



//Landings
routes.get('/landings', landing.getLandings) //query params
/* routes.get('/landings/:mass', landing.mass) */ // route params


module.exports = routes;
const express = require('express');
const routes = express.Router();
const landing = require('../controllers/landings-controllers')



//Landings
routes.get('/landings/?minimum_mass', landings.minimumMass) //query params
routes.get('/landings/:mass', landings.mass) // route params


module.exports = routes;
const express = require('express');
const routes = express.Router();

const landings = require('../controllers/landings-controllers')



//Landings
routes.get('/landings', landings.getLandingsByQuery) //query params

routes.get('/landings/mass/:mass?', landings.getLandingByMass) // route params
routes.get('/landings/class/:class', landings.getLandingsByClass) // route params
routes.post('/landings/create', landings.createLanding)



module.exports = routes;
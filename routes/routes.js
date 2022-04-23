const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    console.log("Hello world")
    res.status(200).send({message: "hello world" })
})

module.exports = routes;
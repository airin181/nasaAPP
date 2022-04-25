const mongoose = require("../config/dbMongo");


const landingSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    id: {
        type: String,
    },
    nametype: {
        type: String,
    },
    recclass: {
        type: String,
    },
    mass: {
        type: String,
    },
    fall: {
        type: String,
    },
    year: {
        type: String,
    },
    reclat: {
        type: Number,
    },
    reclong:{
        type: Number,
    },
    geolocation: {
        latitude: {
            type: Number,
        },
        longitude:{
            type: Number,
        }
    }
});

const Landing = mongoose.model("landings", landingSchema);

module.exports = Landing;
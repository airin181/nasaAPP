const mongoose = require('mongoose')
require('dotenv').config();
const username = process.env.ATLAS_USER;
const password = process.env.ATLAS_PASSWORD;
const dbName = process.env.ATLAS_DB_NAME;
const url = `mongodb+srv://${username}:${password}@nasaapp.isevh.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true
}

mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to database Mongo')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

module.exports = mongoose;
//peticiones a la base de datos
/* const { ObjectId } = require("mongodb"); */
const landingSchema = require("./model_schema");
require("mongoose");
require("mongodb");

const getAllLandings = async () => {
    try{
        const landings = await landingSchema.find({},'-_id');
        return landings;
    }
    catch(err){
        console.log(err);
    }
}

const getLandingByMass = async (minimum_mass) => {
    try{
        if(minimum_mass){
        console.log(typeof parseInt(minimum_mass));

        const landingByMass = await landingSchema.find({mass: {$gt:minimum_mass}}, 'name mass -_id');
        return landingByMass
        }
    }
    catch(err){
        console.error(err);
    }
} 

const landingMongo = {

    getAllLandings,
    getLandingByMass,

}

module.exports = landingMongo;
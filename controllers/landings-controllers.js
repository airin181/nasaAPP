//lógica de negocio
const landingsModels = require("../models/landings-models");

const getLandings = async (req,res)=>{
    try{

        if (req.query.minimum_mass) {
        
            console.log("console de req.query.minimum_mass: ", req.query.minimum_mass);
            const landingByMass = await landingsModels.getLandingByMass(req.query.minimum_mass);
            res.status(200).json(landingByMass);
        }

        else{
            const landings = await landingsModel.getAllLandings();
            res.status(200).json(landings);
        }
    }
    catch(err){
        console.error(err);
    }
}




const landingControllers = {
    getLandings
}
module.exports = landingControllers;
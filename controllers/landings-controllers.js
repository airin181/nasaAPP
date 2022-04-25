//lógica de negocio
const landingsModels = require("../models/landings-models");
const res = require("express/lib/response");
const { ObjectId } = require("mongodb");
const landingSchema = require("../models/model_schema");
require("mongoose");
require("mongodb");

//req.query 
const getLandingsByQuery = async (req,res)=>{
    try{
        if(req.query.minimum_mass) {

            console.log("console de req.query.minimum_mass en controllers: ",typeof req.query.minimum_mass); //string
            const mass = parseInt(req.query.minimum_mass)

            const landingByMinMass = await landingsModels.getLandingByQuery(mass);
            console.log("console de landingByMinMass en controllers: ", landingByMinMass);
            res.status(200).json(landingByMinMass);
        }

        else{
            const landings = await landingsModels.getAllLandings();
            res.status(200).json(landings);
        }
    }
    catch(err){
        console.error(err);
    }
}

//ok
const getLandingByMass = async (req,res)=>{
    try{
        const mass = parseInt(req.params.mass)
        console.log("mass en getlandingbymass controllers: ", mass);
       
        const landingByMass = await landingSchema.find({mass:{$eq:mass}},'name mass -_id')
        console.log("landingByMass en getlandingbymass controllers: ", landingByMass);
        res.status(200).json(landingByMass)
    
    }
    catch(err){
        console.error(err);
    }
}

//ok
const getLandingsByClass = async (req, res) => {
    try {
        const recclass = req.params.class
        const filter = { recclass: recclass }
        const query = await landingSchema.find(filter,'name recclass -_id').exec();
      
        res.status(200).json(query)
        
    } catch (err) {
        res.status(400).json({ msg: "Bad Request" })
        throw err
    }
}


const createLanding = async (req,res) => {

    console.log('c.log de req.body: ',req.body);

    try{
    const newLanding = new landingSchema(req.body);
    console.log(newLanding);
    newLanding.save((err, newLanding) => {
        if (err) return console.error(err);
        console.log(`${newLanding.name} saved in landings collection`)
    })
    res.status(201).json({ message: "New landing created" + req.body })

    } catch(err){
        res.status(400).json({message:err});
    }
  }


const landingControllers = {
    getLandingsByQuery,
    getLandingByMass,
    getLandingsByClass,
    createLanding
}
module.exports = landingControllers;
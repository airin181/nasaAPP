//peticiones a la base de datos
const res = require("express/lib/response");
const { ObjectId } = require("mongodb");
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

const getLandingByQuery = async (minimum_mass) => {
    try{
        if(minimum_mass){
            console.log('c.log de minimum_mass en models: ',minimum_mass);
            const agg = [
                {
                    '$project':
                    {
                        '_id': 0,
                        'name': 1,
                        'mass': 1
                    }
                },
                {
                    '$match': { '$expr': { '$gte': [{ '$toDecimal': '$mass' }, minimum_mass] } }
                }
            ];
            const result = landingSchema.aggregate(agg);
            console.log('c.log de result en models: ',result);


            const minMassData = await landingSchema.find({mass: {$gte:minimum_mass}},'name mass -_id')
            console.log('c.log de minMassData en models: ',minMassData);//me devuelve mass que empiezan por 9

        
            return minMassData        
        
        }
    }
    catch(err){
        console.error(err);
    }
} 



const landingMongo = {

    getAllLandings,
    getLandingByQuery,
    

}

module.exports = landingMongo;
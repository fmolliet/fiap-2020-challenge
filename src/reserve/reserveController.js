const { indexReserves,storeReserve } = require('./reserveServices');

module.exports = {
    async index(req, res){
        try{
            const reserves = await indexReserves();
            return res.json(reserves);
        } catch ( err ){
            return res.json(err).status(400);
        }
    },
    
    async store(req, res){
        try{
            const reserves = await storeReserve(req.body);
            return res.json(reserves);
        } catch ( err ){
            return res.json(err).status(400);
        }
    }
};
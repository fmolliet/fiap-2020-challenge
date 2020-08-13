const Reserve = require('./Reserve');

module.exports = {
    async indexReserves(){
        return await Reserve.find();
    },  
    
    async storeReserve( body ){
        const { session, email= null, username = null , sku, quantity} = body;
        
        const newReserve = await Reserve.create({ session, email, username, sku, quantity});
        
        return newReserve;
    }, 
    
    
};
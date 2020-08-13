const { connect } = require('mongoose');
const logger = require('../utils/logger');

class Connect {
    connect(){
        connect(
            `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`,
            {
                user                : process.env.MONGO_USER,
                pass                : process.env.MONGO_PASS,
                dbName              : process.env.MONGO_COLLECTION,
                useUnifiedTopology  : true,
                useNewUrlParser     : true,
            },
            (err) => {
                if (err) throw err;
            }
        ).then(()=>{
            logger.info('Connected to database');
        });
    }
}

module.exports = new Connect().connect();
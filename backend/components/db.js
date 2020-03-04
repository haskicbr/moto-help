const mongoose = require('mongoose');
const config = require('./../config');

class DB {
    static async connection() {
        return await mongoose.connect(`mongodb://${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).catch(e => {
            throw new Error(500, "error db connection")
        });
    }
}

DB.prototype.connection = undefined;

module.exports = DB;
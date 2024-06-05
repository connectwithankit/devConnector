const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDb = async() => {
    try{
        mongoose.connect(db);
        console.log('DB connected');
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDb;
const mongoose = require('mongoose');
const {MONGODB_CONNECT} = require('../confg/index');

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_CONNECT);
        console.log(`Database Connected To Host: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

module.exports = dbConnect;
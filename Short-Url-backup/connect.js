require('dotenv').config();
const mongoose = require('mongoose');

async function connectToDatabase() {
    const dbURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}`;

    return mongoose.connect(dbURI)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch(err => {
            console.error('Error connecting to MongoDB:', err);
        });
}

module.exports = {
    connectToDatabase
}

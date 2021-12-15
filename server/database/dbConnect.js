const mongoose = require('mongoose');

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_URL = "mongodb+srv://pesto-mockprep:pesto-eta2@mockprep.hhlfz.mongodb.net/MockPrep?retryWrites=true&w=majority"

const connectDb = async () => { 
    mongoose.connect(MONGO_URL, connectionParams)
    .then( () => {
        console.log('Connected to database')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
}


module.exports = connectDb;
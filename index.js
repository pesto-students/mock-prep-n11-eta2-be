const express = require('express')
const app = express();
const port = process.env.PORT || 3000
const mongoose = require('mongoose')

const mongo_url = "mongodb+srv://pesto-mockprep:pesto-eta2@mockprep.hhlfz.mongodb.net/mockprep?retryWrites=true&w=majority"
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

app.use(express.static("public"))

mongoose.connect(mongo_url, connectionParams)
.then( () => {
    console.log('Connected to database')
})
.catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`);
})

app.get('/', (req, res) => {
    res.send('Welcome to Mock prep!');
});

app.listen(port, () => {
  console.log(`Mock Prep listening on port ${port}!`)
});
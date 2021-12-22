const mongoose = require("mongoose")

var QuerySchema = new mongoose.Schema(
    {
        name:{ type: String},
        email: { type: String},
        contact: { type: String},
        description: { type: String },
        pending: {type:Boolean}
})


const QueryDb = mongoose.model('Query', QuerySchema) 
module.exports = QueryDb;
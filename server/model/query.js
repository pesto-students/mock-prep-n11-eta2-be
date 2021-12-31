const mongoose = require("mongoose")

var UserQuerySchema = new mongoose.Schema({
        name:{ type: String},
        email: { type: String, required: true },
        contact: { type: String},
        description: { type: String },
        status: { type: String },
        comments: [{ type: String }],
        title: {type:String}
})

const QueryDb = mongoose.model('UserQuery', UserQuerySchema) 
module.exports = QueryDb;
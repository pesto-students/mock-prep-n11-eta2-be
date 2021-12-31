const mongoose = require("mongoose")

var StudentQuerySchema = new mongoose.Schema({     
        email: { type: String, required: true },
        title: { type: String },
        studentId: {type:String},
        name:{ type: String},
        contact: { type: String},
        description: { type: String },
        status: { type: String },
        comments: [{ type: String }],
    }
)

const StudentQueryDb = mongoose.model('StudentQuery', StudentQuerySchema) 
module.exports = StudentQueryDb;
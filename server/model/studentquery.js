const mongoose = require("mongoose")

var StudentQuerySchema = new mongoose.Schema(
    {
        name:{ type: String},
        email: { type: String, required: true },
        contact: { type: String},
        description: { type: String },
        status: { type: String },
        comments: [{ type: String }],
        title: { type: String },
        studentId: {type:String}
})


const StudentQueryDb = mongoose.model('StudentQuery', StudentQuerySchema) 
module.exports = StudentQueryDb;
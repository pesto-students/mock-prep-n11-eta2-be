const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema(
    {

        userId: { type: Object, required: true, unique: true },
        email:{ type: String, required: true, unique: true },
        name: { type: String, required: true },
        contact: { type: String  },
        degree: { type: String },
        experience: { type: Number  },
        company: { type: String},
        skills: [{ type: String }],
        image: { type: String },
        about: { type: String },
        topics: [{ type: String }],
        rating: { type: Number },
        listed: { type: Boolean },
    }
) 

const StudentDb = mongoose.model('Student', StudentSchema) 
module.exports = StudentDb;
const mongoose = require("mongoose")

const InterviewerSchema = new mongoose.Schema(
    {

        userId: { type: Object, required: true, unique: true },
        email:{ type: String, required: true, unique: true },
        name: { type: String, required: true },
        contact: { type: String  },
        designation: { type: String },
        experience: { type: Number  },
        company: { type: String},
        skills: [{ type: String }],
        image: { type: String },
        about: { type: String },
        topics: [{ type: String }],
        rating: { type: Number },
        onboarded: { type: Boolean },
        interviewCount: {type:Number}
    }
) 


const InterviewerDb = mongoose.model('Interviewer', InterviewerSchema) 
module.exports = InterviewerDb;
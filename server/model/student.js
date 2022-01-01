const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
        userId: { type: Object, required: true, unique: true },
        email:{ type: String, required: true, unique: true },
        name: { type: String },
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
        package: {
            name: { type: String },
            interviewsLeft: { type: Number },
        },
        analytics: {
            totalInterviews: { type: Number },
            topicsOnging: { type: Number },
            interviewRating: { type: Number },
            quizRating: { type: Number },
            ranking: { type: Number }
        },
        learnings: [
            {
                topics: { 
                    name: { type: String },
                    topicId: {type:String}
                },
                quiz: {
                    quizId: { type: String },
                    score: { type: Number },
                    attempts: {type:Number}
                },
                interview: { id: { type: String }, score: {type:Number}}
            }
        ]
    }
) 

const StudentDb = mongoose.model('Student', StudentSchema) 
module.exports = StudentDb;
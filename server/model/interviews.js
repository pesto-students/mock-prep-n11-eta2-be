const mongoose = require("mongoose")

var InterviewsSchema = new mongoose.Schema(
    {
        topic: { type: String, required: true },
       
        date: { type: String, required: true },
        time: { type: String, required: true },
        meetingUrl: { type: String, required: true },
        status: { type: String, required: true },
        student: {
            name: { type: String  },
            email: { type: String  },
            id: { type: String  }
        },
        interviewer: {
            name: { type: String },
            email: { type: String },
            id: { type: String }
        },
        interviewerFeedback: {
            topicsTested: { type: String },
            questionsAsked: { type: String },
            actionItems: {type:String},
            implementation: {type:Number},
            logical: {type:Number},
            overallRating: { type: Number, required: true },
            finalCal: { type: Boolean},
            comments: { type: String},
        },
        studentFeedback: {
            interviewerExperience: { type: Number, required: true },
            interviewerKnowledge: { type: String },
            queriesResolved: {type:Number},
            comments: {type:String}
        },

        key: { type: Number, required: true },
        
    }
)

const InterviewDb = mongoose.model('interview', InterviewsSchema) 
module.exports = InterviewDb;


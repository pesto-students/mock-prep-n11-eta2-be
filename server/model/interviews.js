const mongoose = require("mongoose")

var InterviewsSchema = new mongoose.Schema(
    {
        topic: { type: String },
        date: { type: String },
        time: { type: String},
        meetingUrl: { type: String},
        status: { type: String},
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
            overallRating: { type: Number},
            finalCal: { type: Boolean},
            comments: { type: String},
        },
        studentFeedback: {
            interviewerExperience: { type: Number },
            interviewerKnowledge: { type: String },
            queriesResolved: {type:Number},
            comments: {type:String}
        },
        actionItems: [{
            title: { type: String } ,
            description: { type: String } ,
            due: { type: String } ,
            status: { type: String } }    
        ],

        key: { type: Number},
    }
)

const InterviewDb = mongoose.model('Interviews', InterviewsSchema) 
module.exports = InterviewDb;


const mongoose = require("mongoose")

var QuizSchema = new mongoose.Schema(
            {
                title: { type: String, unique: true, required: true },
                description: { type: String },
                category: { type: String },
                image: { type: String,required:true },
                questions: [
                    {
                        question: { type: String },
                        description: { type: String },
                        options: [
                            { answer_a: { type: String } },
                            { answer_b: { type: String} },
                            { answer_c: { type: String} },
                            { answer_d: { type: String } }
                        ],
                        multipleChoice: { type: Boolean },
                        correctAnswers: [
                            { answer_a: { type: Boolean}},
                            { answer_b: { type: Boolean}},
                            { answer_c: { type: Boolean}},
                            { answer_d: { type: Boolean}}
                        ],
                        correctAnswer: { type: String },
                        explanation: { type: String },
                        hint: { type: String },
                        category: { type: String },
                        difficulty: { type: String },
                        tags: [{type:String}]
                    }
                ]
            }
)

const QuizDb = mongoose.model('Quiz', QuizSchema) 
module.exports = QuizDb;


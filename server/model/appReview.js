const mongoose = require("mongoose")

var appReviewSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email:{ type: String, required: true, unique: true },
        company: { type: String,required: true },
        review: { type: String, required: true },
        image: { type: String, required: true },
        rating: { type: Number, required: true },
    }
)


const AppReviewDb = mongoose.model('AppReview', appReviewSchema) 
module.exports = AppReviewDb;
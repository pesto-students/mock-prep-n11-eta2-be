const mongoose = require("mongoose")

var TopicSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        image :{type:String}
})

const TopicDb = mongoose.model('Topic', TopicSchema) 
module.exports = TopicDb;

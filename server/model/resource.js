const mongoose = require("mongoose")

var ResourceSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique:true },
        description:{ type: String, required: true },
        url: { type: String, required: true },
        image: { type: String },
        topicId: {type:String}
})

const ResourceDb = mongoose.model('Resource', ResourceSchema) 
module.exports = ResourceDb;

    
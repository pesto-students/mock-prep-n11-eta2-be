const mongoose = require("mongoose")

var useSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email:{ type: String, required: true, unique: true },
        role: { type: String, required: true }
    }
)

const UserDb = mongoose.model('User', useSchema) 
module.exports = UserDb;
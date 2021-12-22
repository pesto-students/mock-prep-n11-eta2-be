const mongoose = require("mongoose")

var PricingSchema = new mongoose.Schema(
    {
        name:{ type: String},
        email: { type: String},
        contact: { type: String},
        query: {type:String }
})


const PricingDb = mongoose.model('Pricing', PricingSchema) 
module.exports = PricingDb;
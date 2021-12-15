const mongoose = require("mongoose")

var PricingSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        price:{ type: String, required: true, unique: true },
        description: { type: String, required: true },
        benefits: [ { type: String, required: true }]
})


const PricingDb = mongoose.model('Pricing', PricingSchema) 
module.exports = PricingDb;
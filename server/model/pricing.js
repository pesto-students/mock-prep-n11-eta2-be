const mongoose = require("mongoose")

var PricingSchema = new mongoose.Schema({
        title: { type: String },
        price:{ type: String },
        description: { type: String},
        benefits: [ { type: String }]
})

const PricingDb = mongoose.model('Pricing', PricingSchema) 
module.exports = PricingDb;
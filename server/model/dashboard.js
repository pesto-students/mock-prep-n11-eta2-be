const mongoose = require("mongoose")

var DashboardSchema = new mongoose.Schema(
    {
        cards: [{ description: { type: String }, value: { type: Number }, icon: { type: String } }],
        usersOnboarded: {
            title: { type: String },
            labels: [{ type: String }],
            datasets: [{
                label: { type: String },
                data: [{ type: Number }],
                borderColor: { type: String },
                backgroundColor: {type:String}
            }]
        },
        trendingTopics: {
            title: { type: String },
            labels: [{ type: String }],
            datasets: [{
                label: { type: String },
                data: [{ type: Number }],
                borderColor: { type: String },
                backgroundColor: [{type:String}]
            }]
        }
    }
)


const DashboardDb = mongoose.model('Dashboard', DashboardSchema) 
module.exports = DashboardDb;
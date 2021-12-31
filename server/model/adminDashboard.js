const mongoose = require("mongoose")

var AdminDashboardSchema = new mongoose.Schema({
        cards: [{ description: { type: String }, value: { type: Number }, icon: { type: String } }],
        earnings: {
            title: { type: String },
            labels: [{ type: String }],
            datasets: [{
                label: { type: String },
                data: [{ type: Number }],
                borderColor: { type: String },
                backgroundColor: { type: String }
            }]
        },
        incomeResources: {
            title: { type: String },
            labels: [{ type: String }],
            datasets: [{
                label: { type: String },
                data: [{ type: Number }],
                borderColor: { type: String },
                backgroundColor: [{ type: String }]
            }]
        },
        totalSales: {
            title: { type: String },
            labels: [{ type: String }],
            datasets: [{
                label: { type: String },
                data: [{ type: Number }],
                borderColor: { type: String },
                backgroundColor: { type: String }
            }]
        },
        tableDataSource: {
            topics: { type: String },
            interviewer: { type: String },
            student: { type: String },
            date: { type: Date },
            time: { type: String },
            status: { type: String },
            key: {type:Number}            
        }
    }
)

const AdminDashboardDb = mongoose.model('AdminDashboard', AdminDashboardSchema) 
module.exports = AdminDashboardDb;
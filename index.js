const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const adminRoute = require('./server/routes/Admin')
const UserRoute = require('./server/routes/User')
const StudentRoute = require('./server/routes/Student')
const InterviewerRoute = require('./server/routes/interviewer')
const ApplicationReviewRoute = require('./server/routes/ApplicationReview')
const DashbaordRoute = require('./server/routes/Dashboard')
const AdminDashbaordRoute = require('./server/routes/AdminDashboard')
const PricingRoute = require('./server/routes/Pricing')
const TopicRoute = require('./server/routes/Topic')
const ResourceRoute = require('./server/routes/Resource')

const cookieSession = require('cookie-session');
const connectDb = require("./server/database/DbConnect")

app.use(express.static("public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2']
}))

app.use('/admin', adminRoute)
app.use('/user', UserRoute)
app.use('/student', StudentRoute)
app.use('/interviewer', InterviewerRoute)
app.use('/appReview', ApplicationReviewRoute)
app.use("/dashboard", DashbaordRoute)
app.use("/adminDashboard", AdminDashbaordRoute)
app.use("/pricing", PricingRoute)
app.use("/topic", TopicRoute)
app.use("/resource",ResourceRoute)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Mock Prep listening on port ${port}!`)
});

app.get("/", (req, res) => { res.send("Welcome to Mock Prep !!")})

connectDb();
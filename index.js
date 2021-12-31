const express = require('express')
const cors = require("cors")
const cookieSession = require('cookie-session');
const connectDb = require("./server/database/dbConnect")
const app = express();
const bodyParser = require('body-parser')

const UserRoute = require('./server/routes/user')
const StudentRoute = require('./server/routes/student')
const InterviewerRoute = require('./server/routes/interviewer')
const ApplicationReviewRoute = require('./server/routes/applicationReview')
const DashbaordRoute = require('./server/routes/dashboard')
const AdminDashbaordRoute = require('./server/routes/adminDashboard')
const PricingRoute = require('./server/routes/pricing')
const TopicRoute = require('./server/routes/topic')
const ResourceRoute = require('./server/routes/resource')
const RazorpayRoute = require('./server/routes/razorpay')
const InterviewsRoute = require('./server/routes/interviews')
const QuizRoute = require('./server/routes/quiz')
const QueryRoute = require('./server/routes/query')
const AuthRoute = require('./server/routes/auth')
const StudentQueryRoute = require('./server/routes/studentquery')

app.use(cors())
app.use(express.static("public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2']
}))

app.use('/user', UserRoute)
app.use('/student', StudentRoute)
app.use('/interviewer', InterviewerRoute)
app.use('/appReview', ApplicationReviewRoute)
app.use("/dashboard", DashbaordRoute)
app.use("/adminDashboard", AdminDashbaordRoute)
app.use("/pricing", PricingRoute)
app.use("/topic", TopicRoute)
app.use("/resource",ResourceRoute)
app.use("/quiz",QuizRoute)
app.use("/auth",AuthRoute)
app.use("/query", QueryRoute)
app.use("/razorpay", RazorpayRoute)
app.use("/interviews", InterviewsRoute)
app.use("/studentQuery", StudentQueryRoute)

const PORT = process.env.PORT||'8080';

app.listen(PORT, () => {
  console.log(`Mock Prep listening on port ${PORT}!`)
});

app.get("/", (req, res) => { res.send("Welcome to Mock Prep !!")})

connectDb();
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;
const adminRoute = require('./server/routes/AdminRoute')
const Router = require('./server/routes/Router')
const UserRouter = require('./server/routes/UserRouter')
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
app.use('/', Router)
app.use('/user', UserRouter)

app.listen(port, () => {
  console.log(`Mock Prep listening on port ${port}!`)
});

connectDb();
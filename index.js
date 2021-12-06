const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./passport');
const mongoose = require('mongoose')
require('dotenv').config();


const mongo_url = "mongodb+srv://pesto-mockprep:pesto-eta2@mockprep.hhlfz.mongodb.net/mockprep?retryWrites=true&w=majority"
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

app.use(express.static("public"))
app.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2']
  }))
  
  
const isLoggedIn = (req, res, next) => {
      if (req.user) {
          next();
      } else {
          res.sendStatus(401);
      }
  }
  
  app.use(passport.initialize());
  app.use(passport.session());
  

mongoose.connect(mongo_url, connectionParams)
.then( () => {
    console.log('Connected to database')
})
.catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`);
})


app.get("/failed", (req, res) => {
    res.send("Failed")
})
app.get("/success",isLoggedIn, (req, res) => {
    res.send(`Welcome ${req.user.email}`)
})

app.get('/google',
    passport.authenticate('google', {
            scope:
                ['email', 'profile']
        }
    ));

app.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/failed',
    }),
    function (req, res) {
        res.redirect('/success')

    }
);

app.get("/logout", (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})



app.listen(port, () => {
  console.log(`Mock Prep listening on port ${port}!`)
});
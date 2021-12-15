const express = require('express')
var router = express.Router()
const passport = require('passport');

require('./passport');
require('dotenv').config();

router.use(passport.initialize());
router.use(passport.session());

const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

router.get("/failed", (req, res) => {
    res.send("Failed")
})

router.get("/success",isLoggedIn, (req, res) => {
    res.send(`Welcome ${req.user.email}`)
})

router.get('/google', passport.authenticate('google', {
    scope:
        ['email', 'profile']
}) ,(req,res) => {
    res.json("Initiated Login")
});

router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/failed',
    }),
    function (req, res) {
        res.redirect('/success')

    }
);

router.get("/logout", (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})
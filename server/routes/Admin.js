var express = require('express')
var router = express.Router()

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.post('/login', function (req, res) {
  const {userName, password} = req.body;
  if(userName === 'admin' && password === 'admin'){
        res.json("Admin Authenticated")
  }
})

router.get('/getData', function (req, res) {
  res.json({
      interviewers : [],
      resources : []
  })
})

router.post('/adminLogin', function (req,res){
  console.log(req.body)
  res.json({status : "Success"})
})

module.exports = router
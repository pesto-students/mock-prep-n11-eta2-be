const UserDb = require("../model/user")

exports.find = (req, res) => { 
        UserDb.find().then(user => { res.send(user)}).catch(err => {res.status(500).send({message:err.message || "Error fetching user"})})
}

exports.    create = (req, res) => { 
    if (!req.body) { res.status(400).send({message:"Input cannot be empty"})}

    const user = new UserDb({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        googleObj: req.body.googleObj
    })

    user.save(user).then(data => { res.send(data) }).catch(err => {res.status(500).send({message:err.message || "Error while saving user"})})
}

exports.findOne = (req, res) => { 
 
    if (!req.body) { res.status(500).send({message:"Input cannpt be empty"})}
    let id = req.params.id;
    UserDb.findById(id)
        .then(data => { data != null ? res.send(data) : res.status(401).send({ message: "User not found for id " + id }) })
        .catch(err => { res.status(500).send({ message: err.message || "Error while fetching user" }) })
}

exports.update = (req, res) => { 
    if (!req.body) { res.status(500).send({message:"Input cannpt be empty"})}

    let id = req.params.id;
    UserDb.findByIdAndUpdate(id, req.body)
    .then(data => { data != null ? res.send(data) : res.status(401).send({message:"User not found for id "+id})})
    .catch(err => { res.status(500).send({ message: err.message || "Error while updating user" }) })
}

exports.delete = (req, res) => { 
    if (!req.body) { res.status(500).send({message:"Input cannpt be empty"})}

    let id = req.params.id;
    UserDb.findByIdAndDelete(id)
        .then(data => { data != null ? res.send(data) : res.status(401).send({message:"User not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while Deleting user" }) })
}

exports.findOneUser = (req,res) => {
    if (!req.body) { res.status(500).send({message:"Input cannot be empty"})}
    console.log(req.body);
    let email = req.body.email;
    UserDb.find({"email" : email })
             .then(data => {
                 if(data){
                     console.log(data)
                     res.json(data)
                 }
                 else {
                     res.json({
                         status : "Faiure",
                         message : "Cannot find the User"
                     })
                 }
             })
             .catch(err => {
                 res.status(500).json({
                     message : err.message || "Error while finding "+email
                 })
             })
}
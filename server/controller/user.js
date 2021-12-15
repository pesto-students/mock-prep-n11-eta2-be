const UserDb = require("../model/User")

exports.find = (req, res) => { 
        UserDb.find().then(user => { res.send(user)}).catch(err => {res.status(500).send({message:err.message || "Error fetching user"})})
}

exports.create = (req, res) => { 
    if (!req.body) { res.status(400).send({message:"Input cannot be empty"})}

    const user = new UserDb({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
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
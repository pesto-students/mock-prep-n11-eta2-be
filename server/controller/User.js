const UserDb = require("../model/user")

exports.find = (req, res) => { 
        UserDb.find().then(user => { res.send(user)})
        .catch(err => {res.status(500).send({message:err.message || "Error fetching user"})})
}

exports.create = (req, res) => { 
    if (!req.body) { 
        res.status(400).send({message:"Input cannot be empty"})
    }

    const user = new UserDb({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
    })

    user.save(user)
        .then(data => { res.send(data) })
        .catch(err => {res.status(500).send({message:err.message || "Error while saving user"})})
}

exports.findOne = (req, res) => { 
    if (!req.body) { 
        res.status(500).send({message:"Input cannpt be empty"})
    }

    let id = req.params.id;
    UserDb.findById(id).then(user => { res.send(user) })
                        .catch(err => {res.status(500).send({message:err.message || "Error while fetching user"})})
}

exports.update = (req, res) => { 
    if (!req.body) { 
        res.status(500).send({message:"Input cannpt be empty"})
    }

    let id = req.params.id;
    UserDb.findById(id,req.body).then(user => { res.send(user) })
                        .catch(err => {res.status(500).send({message:err.message || "Error while updating user"})})
}
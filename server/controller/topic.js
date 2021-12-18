const TopicDb = require("../model/topic")

exports.find = (req, res) => { 
    TopicDb.find().then(user => { res.send(user)}).catch(err => {res.status(500).send({message:err.message || "Error fetching Topic"})})
}

exports.create = (req, res) => { 
    if (!req.body) { res.status(400).send({message:"Input cannot be empty"})}

    const Topic = new TopicDb({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image, 
    })

    Topic.save(Topic)
        .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Review not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while saving user" }) })
}

exports.findOne = (req, res) => { 
 
    if (!req.body) { res.status(500).send({message:"Input cannot be empty"})}
    let id = req.params.id;
    TopicDb.findById(id)
    .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Interviewer not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while fetching Topic" }) })
}

exports.update = (req, res) => { 
    if (!req.body) { res.status(500).send({message:"Input cannot be empty"})}

    let id = req.params.id;
    TopicDb.findByIdAndUpdate(id, req.body)
        .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Interviewer not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while updating Topic" }) })
}

exports.delete = (req, res) => { 
    if (!req.body) { res.status(500).send({message:"Input cannot be empty"})}

    let id = req.params.id;
    TopicDb.findByIdAndDelete(id)
        .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Topic not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while Deleting Topic" }) })
}
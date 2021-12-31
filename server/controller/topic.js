const TopicDb = require("../model/topic")

exports.find = (req, res) => { 
    TopicDb.find()
        .then(user => { res.send(user) })
        .catch(err => { res.send({ message: err.message || "Error fetching data" }) })
}

exports.create = (req, res) => { 
    if (!req.body) { res.send({message:"Input cannot be empty"})}

    const Topic = new TopicDb({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image, 
    })

    Topic.save(Topic)
        .then(data => { data != null ? res.send(data) : res.send({message:"Data not found for id "+id})})
        .catch(err => { res.send({ message: err.message || "Error while saving data" }) })
}

exports.findOne = (req, res) => { 
 
    if (!req.body) { res.send({message:"Input cannot be empty"})}
    let id = req.params.id;
    TopicDb.findById(id)
    .then(data => { data != null ? res.send(data) : res.send({message:"Data not found for id "+id})})
        .catch(err => { res.send({ message: err.message || "Error while fetching data" }) })
}

exports.update = (req, res) => { 
    if (!req.body) { res.send({message:"Input cannot be empty"})}

    let id = req.params.id;
    TopicDb.findByIdAndUpdate(id, req.body)
        .then(data => { data != null ? res.send(data) : res.send({message:"Data not found for id "+id})})
        .catch(err => { res.send({ message: err.message || "Error while updating data" }) })
}

exports.delete = (req, res) => { 
    if (!req.body) { res.send({message:"Input cannot be empty"})}

    let id = req.params.id;
    TopicDb.findByIdAndDelete(id)
        .then(data => { data != null ? res.send(data) : res.send({message:"Data not found for id "+id})})
        .catch(err => { res.send({ message: err.message || "Error while Deleting data" }) })
}
const QueryDb = require("../model/query")

exports.find = (req, res) => { 
    QueryDb.find().then(Query => {
        res.send(Query)
    }).catch(err => {
        res.status(404).send({ message: err.message || "Error fetching Query" })
    })
}

exports.create = (req, res) => { 
    if (!req.body) {
        res.status(400).send({ message: "Invalid Input, required fields missing." })
    }

    const Query = new QueryDb({
        title: req.body.title,
        name: req.body.name,
        email: req.body.email,
        description: req.body.description,
        status: req.body.status,
        comments: req.body.comments
    })

    Query.save(Query).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500 ).send({ message: err.message || "Server Error, could not store data" })
    })
}

exports.findOne = (req, res) => { 
 
    if (!req.body) { res.status(500).send({message:"Input cannot be empty"})}
    let id = req.params.id;
    QueryDb.findById(id)
    .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Query not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while fetching Query" }) })
}

exports.update = (req, res) => { 
    if (!req.body) { res.status(500).send({message:"Input cannot be empty"})}

    let id = req.params.id;
    QueryDb.findByIdAndUpdate(id, req.body)
        .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Interviewer not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while updating Query" }) })
}

exports.delete = (req, res) => { 
    if (!req.body) { res.status(500).send({message:"Input cannot be empty"})}

    let id = req.params.id;
    QueryDb.findByIdAndDelete(id)
        .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Query not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while Deleting Query" }) })
}


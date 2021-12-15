const ResourceDb = require("../model/Resource")

exports.find = (req, res) => { 
        ResourceDb.find().then(Resource => { res.send(Resource)}).catch(err => {res.status(500).send({message:err.message || "Error fetching Resource"})})
}

exports.create = (req, res) => { 
    if (!req.body) { res.status(400).send({message:"Input cannot be empty"})}

    const Resource = new ResourceDb({
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        image: req.body.image,
        topicId: req.body.topicId
    })

    Resource.save(Resource).then(data => { res.send(data) }).catch(err => {res.status(500).send({message:err.message || "Error while saving Resource"})})
}

exports.findOne = (req, res) => { 
 
    if (!req.body) { res.status(500).send({message:"Input cannpt be empty"})}
    let id = req.params.id;
    ResourceDb.findById(id)
        .then(data => { data != null ? res.send(data) : res.status(401).send({ message: "Resource not found for id " + id }) })
        .catch(err => { res.status(500).send({ message: err.message || "Error while fetching Resource" }) })
}

exports.update = (req, res) => { 
    if (!req.body) { res.status(500).send({message:"Input cannpt be empty"})}

    let id = req.params.id;
    ResourceDb.findByIdAndUpdate(id, req.body)
    .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Resource not found for id "+id})})
    .catch(err => { res.status(500).send({ message: err.message || "Error while updating Resource" }) })
}

exports.delete = (req, res) => { 
    if (!req.body) { res.status(500).send({message:"Input cannpt be empty"})}

    let id = req.params.id;
    ResourceDb.findByIdAndDelete(id)
        .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Resource not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while Deleting Resource" }) })
}
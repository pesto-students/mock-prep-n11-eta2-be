const DashboardDb = require("../model/dashboard")

exports.find = (req, res) => { 
    DashboardDb.find().then(user => { res.send(user)}).catch(err => {res.status(500).send({message:err.message || "Error fetching Dashboard"})})
}

exports.create = (req, res) => { 
    if (!req.body) { res.status(400).send({message:"Input cannot be empty"})}

    const int = new DashboardDb({
        cards: req.body.cards,
        usersOnboarded: req.body.usersOnboarded,
        trendingTopics: req.body.trendingTopics
    })
    console.log(int)

    int.save(int).then(data => { res.send(data) }).catch(err => {res.status(500).send({message:err.message || "Error while saving user"})})
}

exports.findOne = (req, res) => { 
 
    if (!req.body) { res.status(500).send({message:"Input cannot be empty"})}
    let id = req.params.id;
    DashboardDb.findById(id)
        .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Dashboard not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while fetching Dashboard" }) })
}

exports.update = (req, res) => { 
    if (!req.body) { res.status(500).send({message:"Input cannot be empty"})}

    let id = req.params.id;
    DashboardDb.findByIdAndUpdate(id, req.body)
        .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Dashboard not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while updating Dashboard" }) })
}

exports.delete = (req, res) => { 
    if (!req.body) { res.status(500).send({message:"Input cannot be empty"})}

    let id = req.params.id;
    DashboardDb.findByIdAndDelete(id)
        .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Dashboard not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while Deleting Dashboard" }) })
}
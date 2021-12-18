const PricingDb = require("../model/pricing")

exports.find = (req, res) => { 
    PricingDb.find().then(user => { res.send(user)}).catch(err => {res.status(500).send({message:err.message || "Error fetching Pricing"})})
}

exports.create = (req, res) => { 
    if (!req.body) { res.status(400).send({message:"Input cannot be empty"})}

    const Pricing = new PricingDb({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        benefits: req.body.benefits, 
    })

    Pricing.save(Pricing)
        .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Review not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while saving user" }) })
}

exports.findOne = (req, res) => { 
 
    if (!req.body) { res.status(500).send({message:"Input cannot be empty"})}
    let id = req.params.id;
    PricingDb.findById(id)
    .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Interviewer not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while fetching Pricing" }) })
}

exports.update = (req, res) => { 
    if (!req.body) { res.status(500).send({message:"Input cannot be empty"})}

    let id = req.params.id;
    PricingDb.findByIdAndUpdate(id, req.body)
        .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Interviewer not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while updating Pricing" }) })
}

exports.delete = (req, res) => { 
    if (!req.body) { res.status(500).send({message:"Input cannot be empty"})}

    let id = req.params.id;
    PricingDb.findByIdAndDelete(id)
        .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Pricing not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while Deleting Pricing" }) })
}
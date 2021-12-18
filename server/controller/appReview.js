const AppReviewDb = require("../model/appReview")

exports.find = (req, res) => { 
    AppReviewDb.find().then(user => { res.send(user)}).catch(err => {res.status(500).send({message:err.message || "Error fetching AppReview"})})
}

exports.create = (req, res) => { 
    if (!req.body) { res.status(400).send({message:"Input cannot be empty"})}

    const apppReview = new AppReviewDb({
        name: req.body.name,
        email: req.body.email,
        company:req.body.company,
        image: req.body.image,
        review: req.body.review
    })
    

    apppReview.save(apppReview).then(data => { res.send(data) }).catch(err => {res.status(500).send({message:err.message || "Error while fetching review"})})
}

exports.findOne = (req, res) => { 
 
    if (!req.body) { res.status(500).send({message:"Input cannot be empty"})}
    let id = req.params.id;
    AppReviewDb.findById(id)
        .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Review not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while fetching student" }) })

}

exports.update = (req, res) => { 
    if (!req.body) { res.status(500).send({message:"Input cannot be empty"})}

    let id = req.params.id;
    AppReviewDb.findByIdAndUpdate(id, req.body)
        .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Review not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while updating Review" }) })
}

exports.delete = (req, res) => { 
    if (!req.body) { res.status(500).send({message:"Input cannot be empty"})}

    let id = req.params.id;
    AppReviewDb.findByIdAndDelete(id)
        .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Review not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while deleting Review" }) })
}
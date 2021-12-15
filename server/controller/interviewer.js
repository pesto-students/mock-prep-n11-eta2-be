const InterviewerDb = require("../model/interviewer")

exports.find = (req, res) => { 
    InterviewerDb.find().then(user => { res.send(user)}).catch(err => {res.status(500).send({message:err.message || "Error fetching Interviewer"})})
}

exports.create = (req, res) => { 
    if (!req.body) { res.status(400).send({message:"Input cannot be empty"})}

    const int = new InterviewerDb({
        userId: req.body.userId,
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        designation: req.body.designation,
        experience: req.body.experience,
        company: req.body.company,
        skills: req.body.skills,
        image: req.body.image,
        about: req.body.about,
        topics: req.body.topics,
        rating: req.body.rating,
        onboarded: req.body.listed,
        interviewCount:req.body.interviewCount
    })
    console.log(int)

    int.save(int).then(data => { res.send(data) }).catch(err => {res.status(500).send({message:err.message || "Error while saving user"})})
}

exports.findOne = (req, res) => { 
 
    if (!req.body) { res.status(500).send({message:"Input cannot be empty"})}
    let id = req.params.id;
    InterviewerDb.findById(id)
        .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Interviewer not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while fetching Interviewer" }) })
}

exports.update = (req, res) => { 
    if (!req.body) { res.status(500).send({message:"Input cannot be empty"})}

    let id = req.params.id;
    InterviewerDb.findByIdAndUpdate(id, req.body)
        .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Interviewer not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while updating Interviewer" }) })
}

exports.delete = (req, res) => { 
    if (!req.body) { res.status(500).send({message:"Input cannot be empty"})}

    let id = req.params.id;
    InterviewerDb.findByIdAndDelete(id)
        .then(data => { data != null ? res.send(data) : res.status(401).send({message:"Interviewer not found for id "+id})})
        .catch(err => { res.status(500).send({ message: err.message || "Error while Deleting Interviewer" }) })
}
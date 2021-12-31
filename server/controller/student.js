const StudentDb = require("../model/student");

exports.find = (req, res) => {
  StudentDb.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.send({ message: err.message || "Error fetching data" });
    });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.send({ message: "Input cannot be empty" });
  }

  const student = new StudentDb({
    userId: req.body.userId,
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    degree: req.body.degree,
    experience: req.body.experience,
    company: req.body.company,
    skills: req.body.skills,
    image: req.body.image,
    about: req.body.about,
    topics: req.body.topics,
    rating: req.body.rating,
    listed: req.body.listed,
    package: req.body.package,
    analytics: req.body.analytics,
    learnings: req.body.learnings,
  });

  student
    .save(student)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.send({ message: "Data not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while saving data" });
    });
};

exports.findOne = (req, res) => {
  if (!req.body) {
    res.send({ message: "Input cannot be empty" });
  }
  let id = req.params.id;
  StudentDb.findById(id)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.send({ message: "Data not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while fetching data" });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.send({ message: "data cannot be empty" });
  }

  let id = req.params.id;
  StudentDb.findByIdAndUpdate(id, req.body)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.send({ message: "Data not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while updating data" });
    });
};

exports.delete = (req, res) => {
  if (!req.body) {
    res.send({ message: "Input cannot be empty" });
  }

  let id = req.params.id;
  StudentDb.findByIdAndDelete(id)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.status(401).send({ message: "Data not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while Deleting data" });
    });
};

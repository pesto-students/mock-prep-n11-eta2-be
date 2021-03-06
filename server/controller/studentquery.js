const StudentQueryDb = require("../model/studentquery");

exports.find = (req, res) => {
  StudentQueryDb.find()
    .then((StudentQuery) => {
      res.send(StudentQuery);
    })
    .catch((err) => {
      res.send({ message: err.message || "Error fetching StudentQuery" });
    });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.send({ message: "Invalid Input, required fields missing." });
  }

  const StudentQuery = new StudentQueryDb({
    studentId: req.body.studentId,
    title: req.body.title,
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
    status: req.body.status,
    comments: req.body.comments,
  });

  StudentQuery.save(StudentQuery)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        message: err.message || "Server Error, could not store data",
      });
    });
};

exports.findOne = (req, res) => {
  if (!req.body) {
    res.send({ message: "Input cannot be empty" });
  }
  let id = req.params.id;
  StudentQueryDb.findById(id)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.send({ message: "StudentQuery not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while fetching StudentQuery" });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.send({ message: "Input cannot be empty" });
  }

  let id = req.params.id;
  StudentQueryDb.findByIdAndUpdate(id, req.body)
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
  StudentQueryDb.findByIdAndDelete(id)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.send({ message: "Data not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while Deleting data" });
    });
};

const QueryDb = require("../model/query");

exports.find = (req, res) => {
  QueryDb.find()
    .then((Query) => {
      res.send(Query);
    })
    .catch((err) => {
      res.send({ message: err.message || "Error fetching data" });
    });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.send({ message: "Invalid Input, required fields missing." });
  }

  const Query = new QueryDb({
    title: req.body.title,
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
    status: req.body.status,
    comments: req.body.comments,
  });

  Query.save(Query)
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
  QueryDb.findById(id)
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
    res.send({ message: "Input cannot be empty" });
  }

  let id = req.params.id;
  QueryDb.findByIdAndUpdate(id, req.body)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.status(401).send({ message: "Data not found for id " + id });
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
  QueryDb.findByIdAndDelete(id)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.send({ message: "Query not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while Deleting data" });
    });
};

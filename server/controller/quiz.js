const QuizDb = require("../model/quiz");

exports.find = (req, res) => {
  QuizDb.find()
    .then((Quiz) => {
      res.send(Quiz);
    })
    .catch((err) => {
      res.send({ message: err.message || "Error fetching Data" });
    });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.send({ message: "Input cannot be empty" });
  }

  const Quiz = new QuizDb({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    image: req.body.image,
    questions: req.body.questions,
  });

  Quiz.save(Quiz)
    .then((data) => {
      res.send(data);
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
  QuizDb.findById(id)
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
    res.status(500).send({ message: "Input cannot be empty" });
  }

  let id = req.params.id;
  QuizDb.findByIdAndUpdate(id, req.body)
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
    res.status(500).send({ message: "Input cannot be empty" });
  }

  let id = req.params.id;
  QuizDb.findByIdAndDelete(id)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.send({ message: "Data not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while Deleting data" });
    });
};

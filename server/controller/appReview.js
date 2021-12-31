const AppReviewDb = require("../model/appReview");

exports.find = (req, res) => {
  AppReviewDb.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.send({ message: err.message || "Error fetching Data" });
    });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.send({ message: "Input cannot be empty" });
  }

  const appReview = new AppReviewDb({
    name: req.body.name,
    email: req.body.email,
    company: req.body.company,
    image: req.body.image,
    review: req.body.review,
    rating: req.body.rating,
  });

  appReview
    .save(appReview)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while fetching Data" });
    });
};

exports.findOne = (req, res) => {
  if (!req.body) {
    res.status(500).send({ message: "Input cannot be empty" });
  }
  let id = req.params.id;
  AppReviewDb.findById(id)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.send({ message: "Data not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while fetching Data" });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.send({ message: "Input cannot be empty" });
  }

  let id = req.params.id;
  AppReviewDb.findByIdAndUpdate(id, req.body)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.send({ message: "Data not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while updating Data" });
    });
};

exports.delete = (req, res) => {
  if (!req.body) {
    res.send({ message: "Input cannot be empty" });
  }

  let id = req.params.id;
  AppReviewDb.findByIdAndDelete(id)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.send({ message: "Data not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while deleting Data" });
    });
};

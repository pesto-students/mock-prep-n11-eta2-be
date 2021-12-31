const AdminDashboardDb = require("../model/adminDashboard");

exports.find = (req, res) => {
  AdminDashboardDb.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.send({ message: err.message || "Error fetching AdminDashboard" });
    });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Input cannot be empty" });
  }

  const int = new AdminDashboardDb({
    cards: req.body.cards,
    earnings: req.body.earnings,
    incomeResources: req.body.incomeResources,
    totalSales: req.body.totalSales,
    tableDataSource: req.body.tableDataSource,
  });

  int
    .save(int)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while saving data" });
    });
};

exports.findOne = (req, res) => {
  if (!req.body) {
    res.status(500).send({ message: "Input cannot be empty" });
  }
  let id = req.params.id;
  AdminDashboardDb.findById(id)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.status(401).send({ message: "Data not found for id " + id });
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
  AdminDashboardDb.findByIdAndUpdate(id, req.body)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.status(401).send({ message: "Data not found for id " + id });
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
  AdminDashboardDb.findByIdAndDelete(id)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.send({ message: "Data not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while Deleting Data" });
    });
};

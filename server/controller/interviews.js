const InterviewDb = require("../model/interviews");

exports.find = (req, res) => {
  InterviewDb.find()
    .then((interview) => {
      res.send(interview);
    })
    .catch((err) => {
      res.send({ message: err.message || "Error fetching interview" });
    });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.send({ message: "Input cannot be empty" });
  }

  const interview = new InterviewDb({
    topic: req.body.topic,
    student: req.body.student,
    interviewer: req.body.interviewer,
    date: req.body.date,
    time: req.body.time,
    key: req.body.key,
    status: req.body.status,
    meetingUrl: req.body.meetingUrl,
    studentFeedback: req.body.studentFeedback,
    interviewerFeedback: req.body.interviewerFeedback,
    actionItems: req.body.actionItems,
  });

  interview
    .save(interview)
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
    res.status(500).send({ message: "Input cannot be empty" });
  }
  let id = req.params.id;
  InterviewDb.findById(id)
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
  InterviewDb.findByIdAndUpdate(id, req.body)
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
  InterviewDb.findByIdAndDelete(id)
    .then((data) => {
      data != null
        ? res.send(data)
        : res.send({ message: "Data not found for id " + id });
    })
    .catch((err) => {
      res.send({ message: err.message || "Error while Deleting data" });
    });
};

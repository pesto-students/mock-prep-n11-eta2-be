const RazorPay = require("razorpay");

const razorPay = new RazorPay({
  key_id: "rzp_test_NqioSTNNKAmafH",
  key_secret: "nr6khpMn9oMu7v5oQAh5pdNH",
});

exports.order = (req, res) => {
  let options = {
    amount: req.body.amount,
    currency: "INR",
    receipt: "receipt#1",
  };

  razorPay.orders
    .create(options)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({
        message: err.message || "Server Error, could not create order",
      });
    });
};

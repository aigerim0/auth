const stripe = require("stripe")(
  "sk_test_51JuJYrCdLHTlBDWS8HL3eHpEv2wVn0tbSer7iyrVFOMaZJscfTpQrCE77ssUG6xWdmegCvaNJlY8WVB0C8PzGNE000oKTMwzW8"
);

const payment = async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Blog membership",
      payment_method: id,
      confirm: true,
    });
    res.json({
      message: "Payment successfully!",
      success: true,
    });
  } catch (e) {
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
};

module.exports = { payment };

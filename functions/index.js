const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MzNX5BFwOabXPillCgpK6KCiPCuQ3y9v4wCBFfZ1alNZz8hse3QclQ998MwM11G03m4vdVWC2fxa5rvdaHKCPWw00YPEX5kJK"
);



// - App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen command
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/oct-269d5/us-central1/api

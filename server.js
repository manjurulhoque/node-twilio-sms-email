const express = require("express");
const sms2email = require("./api/sms2email");
const email2sms = require("./api/email2sms");

const app = express();

// Load environment variables from .env file
require("dotenv").config();

// Parse JSON request bodies
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

app.post("/sms2email", (req, res) => {
  sms2email(req, res);
});

app.post("/email2sms", (req, res) => {
  email2sms(req, res);
});

app.get("/", (req, res) => {
  res.send("Successful response.");
});

app.post("/webhook", (req, res) => {
  console.log(req.body);
  res.send("Webhook setup");
});

app.listen(3000, () => console.log("App is listening on port 3000."));

const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./Router/router");
const port = 4000;
const cors = require("cors");

const app = express();

app.use(bodyparser.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use("/api", router);

mongoose
  .connect(
    "mongodb+srv://priyanka234:Bq8vCrLKlRhRmpmg@cluster0.k3lbfqq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("connected");
    app.listen(port, () => {
      console.log(`Server is runnin on ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

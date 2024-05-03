require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Your first API endpoint
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});
app.post("/api/shorturl", function (req, res) {
  const original_url=req.body.url;
  // const short_url=req.body.short_url;
  res.json({
    original_url: original_url,
    short_url: "calquera cousa"
  });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

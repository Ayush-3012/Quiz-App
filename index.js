import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello");
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});

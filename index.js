import express from "express";
import bodyParser from "body-parser";
import _ from "lodash";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { apiReq } from "./apicall.js";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("public", __dirname + "/public");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.render("index");
});

let quizQs;
app.get("/:category", async (req, res) => {
  const requestedCategory = req.params.category;
  let category;
  if (requestedCategory == "space") {
    category = 17;
    quizQs = await apiReq(category);
  } else if (requestedCategory == "sports") {
    category = 21;
    quizQs = await apiReq(category);
  } else if (requestedCategory == "history") {
    category = 23;
    quizQs = await apiReq(category);
  }

  res.render("quiz");
});

var index = 1;
app.get("/quiz/nextQuestion", (req, res) => {
  if (index <= 20) {
    res.json(quizQs[index]);
    index++;
  } else {
    res.json("null");
  }
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});

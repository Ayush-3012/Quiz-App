import express from "express";
import bodyParser from "body-parser";
import _ from "lodash";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { apiReq } from "./apiCall.js";

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

app.get("/:category", async (req, res) => {
  const requestedCategory = _.lowerCase(req.params.category);
  var category;
  switch (requestedCategory) {
    case "space":
      category = "17";
      break;
    case "sports":
      category = "21";
      break;
    case "history":
      category = "23";
      break;
    default:
      category = "-1";
  }

  const quizQs = await apiReq(category);
  category != "-1"
    ? res.render("quiz", { questions: quizQs })
    : res.redirect("/");
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});

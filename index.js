import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import apiReq from "./apiCall.js";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("public", __dirname + "/public");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const quizQs = await apiReq;
// quizQs.forEach(function(item){
//     console.log(item.category)
// })

app.get("/", function (req, res) {
  res.render("index", { questions: quizQs });
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});

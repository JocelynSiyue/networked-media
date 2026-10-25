const multer = require("multer");
const upload = multer({ dest: "public/uploads/" });
//https://www.npmjs.com/package/multer

const express = require("express");
/************
 * import our templating library
 ************/
const nunjucks = require("nunjucks");

const app = express();

const posts = [];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

/************
 * add our nunjucks settings under our middleware
 * this links our express application to the templating tool
 ************/
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");


app.get("/", (req, res) => {
  res.render("baseLayout.njk", { posts });
});

app.get("/newImage", (req, res) => {
  res.render("newImage.njk");
});

app.post("/newImage", upload.single("image"), (req, res) => {
  posts.push({
    image: `/uploads/${req.file.filename}`,
    date: req.body.date,
    location: req.body.location,
    description: req.body.description
  });

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

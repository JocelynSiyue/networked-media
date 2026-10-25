const express = require("express");
/************
 * import our templating library
 ************/
const nunjucks = require("nunjucks");

const app = express();

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

let allData = []

app.get("/", (req, res) => {
  res.render("home.njk");
});

app.get("/form", (req, res) => {
  res.render("form.njk");
});

app.get("/view-all", (req, res) => {
  res.render("view-all.njk",{messagesArrayFromServer:allData});
});

app.use(express.urlencoded({ extended: true }));

app.post('/send-message', (req,res) =>{
  //console.log (request.body);
  allData.push (req.body);
  res.redirect('/view-all')
})
//app.listen is listening for requests
app.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});

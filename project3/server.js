const express = require("express");
const nunjucks = require("nunjucks");

// Multer handles uploaded image files
const multer = require("multer");
const uploadProcessor = multer({ dest: "public/upload/" });

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.set("view engine", "njk");

const allData = [];

app.get("/", (req, res) => {
  res.render("baseLayout.njk", {
    messagesArrayFromServer: allData
  });
});

app.get("/newImage", (req, res) => {
  res.render("newImage.njk");
});

app.post(
  "/send-message",
  uploadProcessor.single("theImage"),
  (req, res) => {
    const receivedMessage = req.body;

    if (req.file) {
      receivedMessage.imgSrc = "/upload/" + req.file.filename;
    }

    allData.unshift(receivedMessage);

    res.redirect("/view-all");
  }
);

app.get("/view-all", (req, res) => {
  res.render("baseLayout.njk", {
    messagesArrayFromServer: allData
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
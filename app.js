const express = require("express");
const bodyParser = require("body-parser");

//STEP 1 import Mongoose
const Mongoose = require("mongoose");

const placesRoutes = require("./routes/places-routes");
const { default: mongoose } = require("mongoose");

const app = express();

//STEP 1 add a new MiddleWare that parses the data
//routes are read top to bottom
//first parse the body then reach the routes
//NOTE: bodyParser.JSON will parse any JSON data and desearlize into JavaScript
//then it will call NEXT and fall into the next middleware which is "/api/places"
app.use(bodyParser.json());

app.use("/api/places", placesRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured" });
});

//STEP 2
//mongoose.connect().then().catch();
const url =
  "mongodb+srv://george72:dvBQ7CguvfLhq6y3@cluster0.kbt6yyp.mongodb.net/products_lecture?retryWrites=true&w=majority";
mongoose
  .connect(url)
  .then(() => {
    //if connection was successful then we start our backend server
    app.listen(3001);
  })
  .catch((err) => {
    console.log(err);
  });

//app.listen(3001);

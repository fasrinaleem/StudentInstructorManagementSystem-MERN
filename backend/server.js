const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const studentRoutes = require("./studentRoutes");
const Posts = require("./posts");
// const studentRoutes = express.Router();
const PORT = 4000;

//const studentModel = require("./studentSchema");

mongoose
  .connect(
    "mongodb+srv://Fasrin:0767739896@mydb-pazde.mongodb.net/AF_WD_19?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch(err => {
    console.log(err.message);
  });



//Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Middlewares
app.use("/api/student", studentRoutes);
app.use("/api/assignment", Posts);


app.listen(PORT, function() {
  console.log("Server is running on port : " + PORT);
});

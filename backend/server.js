const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const courseRoutes = require("./courseRoutes");
// const router = require("./adminRoutes");
const studentRoutes = require("./studentRoutes");
// const instructor = require("./InstructorRoute/instructor");
// const assignment = require("./AssignmentRoute/assignment");
//const courseRoutes = express.Router();
const PORT = 4000;

//const courseModel = require("./courseSchema");

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
app.use(bodyParser.json());

//MiddlewaresCourse
app.use("/api/course", courseRoutes);

//MiddlewaresAdmin
//app.use("/api", router);

//MiddlewaresStudent
app.use("/api/student", studentRoutes);

//Instructor
// app.use("/api/instructor", instructor);
// app.use("/api/assignments", assignment);

app.listen(PORT, function() {
  console.log("Server is running on port : " + PORT);
});

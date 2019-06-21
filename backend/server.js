const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const courseRoutes = express.Router();
const PORT = 4000;

const courseModel = require("./courseSchema");

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

//Get all course details
courseRoutes.route("/").get(function(req, res) {
  courseModel.find(function(err, course) {
    if (err) {
      console.log(err);
    } else {
      res.json(course);
    }
  });
});

courseRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;
  courseModel.findById(id, function(err, courses) {
    res.json(courses);
  });
});

//Add new course to db
courseRoutes.route("/add").post(function(req, res) {
  let course = new courseModel(req.body);
  course
    .save()
    .then(course => {
      res.status(200).json({ course: "Course added successfully" });
    })
    .catch(err => {
      res.status(400).send("Adding new course failed");
    });
});

//Update the course details
courseRoutes.route("/update/:id").post(function(req, res) {
  courseModel.findById(req.params.id, function(err, coursemodel) {
    if (!coursemodel) res.status(404).send("Data is not found");
    else coursemodel.courseName = req.body.courseName;
    coursemodel.instructorName = req.body.instructorName;
    coursemodel.year = req.body.year;
    coursemodel
      .save()
      .then(coursemodel => {
        res.json("Course Updated");
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});

// Delete the course
courseRoutes.route("/delete/:id").delete(function(req, res) {
  courseModel.findOneAndDelete({ _id: req.params.id }, function(
    err,
    coursemodel
  ) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Middlewares
app.use("/course", courseRoutes);

app.listen(PORT, function() {
  console.log("Server is running on port : " + PORT);
});

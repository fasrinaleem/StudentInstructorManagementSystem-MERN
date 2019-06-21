const express = require("express");
const studentRoutes = express.Router();
const studentModel = require("./studentSchema");


//Get all student details
studentRoutes.route("/").get(function(req, res) {
    studentModel.find(function(err, student) {
      if (err) {
        console.log(err);
      } else {
        res.json(student);
      }
    });
  });
  
  studentRoutes.route("/:id").get(function(req, res) {
    let id = req.params.id;
    studentModel.findById(id, function(err, students) {
      res.json(students);
    });
  });
  
  //Add new course to db
  studentRoutes.route("/add").post(function(req, res) {
    let student = new studentModel(req.body);
    student
      .save()
      .then(student => {
        res.status(200).json({ student: "student added successfully" });
      })
      .catch(err => {
        res.status(400).send("Adding new student failed");
      });
  });
  
  //Update the student details
  studentRoutes.route("/update/:id").post(function(req, res) {
    studentModel.findById(req.params.id, function(err, studentmodel) {
      if (!studentmodel) res.status(404).send("Data is not found");
      else studentmodel.studentName = req.body.studentName;
      studentmodel.instructorName = req.body.instructorName;
      studentmodel.year = req.body.year;
      studentmodel
        .save()
        .then(studentmodel => {
          res.json("student Updated");
        })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    });
  });
  
  // Delete the student
  studentRoutes.route("/delete/:id").delete(function(req, res) {
    studentModel.findOneAndDelete({ _id: req.params.id }, function(
      err,
      studentmodel
    ) {
      if (err) res.json(err);
      else res.json("Successfully removed");
    });
  });


  module.exports = studentRoutes;
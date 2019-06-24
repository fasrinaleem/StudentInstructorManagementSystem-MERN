const express = require("express");
const router = express.Router();
const studentRoutes = express.Router();
const StudentModel = require("./studentSchema");

const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const checkAuth = require("./auth/checkAuthStudent");

const jwt = require("jsonwebtoken");
const keys = require("./config/key.json");
const JWT_KEY = keys.JWT_KEY;

//Get all student details
studentRoutes.route("/").get(function(req, res) {
  StudentModel.find(function(err, student) {
    if (err) {
      console.log(err);
    } else {
      res.json(student);
    }
  });
});

studentRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;
  StudentModel.findById(id, function(err, students) {
    res.json(students);
  });
});

//Add new student to db
studentRoutes.route("/add").post(function(req, res) {
  // let student = new studentModel(req.body);
  // student
  //   .save()
  //   .then(student => {
  //     res.status(200).json({ student : "student added successfully" });

  //   })
  //   .catch(err => {
  //     res.status(400).send("Adding new student failed");
  //   });

  StudentModel.find({
    studentID: req.body.studentID
  })
    .exec()
    .then(student => {
      if (student.length >= 1) {
        res.status(409).json({
          message: "Student already exists"
        });
      } else {
        const studentModel = new StudentModel({
          _id: mongoose.Types.ObjectId(),
          studentName: req.body.studentName,
          studentID: req.body.studentID,
          email: req.body.email,
          password: req.body.password,
          nic: req.body.nic,
          course: req.body.course,
          userType: "student"
        });

        studentModel
          .save()
          .then(result => {
            console.log(result);
            res.status(201).json({
              message: "student added",
              createdStudent: result
            });
          })
          .catch(err => {
            console.log(err.message);
            res.status(500).json({
              error: err
            });
          });
      }
    });

  //--------------------------------------- STUDENT MAIL ------------------------
  const output = `
    <p> You have been selected as a student </p>
    <h3>Details</h3>
    <h4>Username and passowrd given below </h4>
    <ul>  
      <li>Name: ${req.body.studentName}</li>
      <li>UserName: ${req.body.studentID}</li>
      <li>Password: ${req.body.password}</li>
    </ul>
    <h3>Thank You</h3>
    
  `;

  const mail = req.body.email;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "testjahrin@gmail.com", // generated ethereal user
      pass: "jahrin@123" // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"BrightNerd" <jahrinsrth@gmail.com>', // sender address
    to: mail, //'fasrinaleem@gmail.com', // list of receivers
    subject: "New Student Request", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    // res.render('contact', {msg:'Email has been sent'});
  });
});

//-----------------------------LOGIN--------------------

//login
router.post("/students/login", (req, res) => {
  console.log(req.body.studentID);
  Studentmodel.find({ studentID: req.body.studentID })
    .exec()
    .then(student => {
      console.log(student);
      if (student.length < 1) {
        return res.status(401).json({
          message: "Authorization Failed!"
        });
      }
      if (student) {
        //correct password
        const token = jwt.sign(
          {
            id: student[0]._id,
            studentID: student[0].studentID,
            userType: student[0].userType
          },
          JWT_KEY,
          {
            expiresIn: "1h"
          }
        );
        console.log(student);
        return res.status(200).json({
          message: "Authorization Success",
          token: token
        });
      }
      res.status(401).json({
        message: "Authorization Failed!"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

//Update the student details
studentRoutes.route("/update/:id").post(function(req, res) {
  StudentModel.findById(req.params.id, function(err, studentmodel) {
    if (!studentmodel) res.status(404).send("Data is not found");
    else studentmodel.studentName = req.body.studentName;
    studentmodel.studentID = req.body.studentID;

    studentmodel.email = req.body.email;
    studentmodel.password = req.body.password;
    studentmodel.nic = req.body.nic;
    studentmodel.course = req.body.course;
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
  StudentModel.findOneAndDelete({ _id: req.params.id }, function(
    err,
    studentmodel
  ) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = studentRoutes;

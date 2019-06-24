const express = require("express");
const courseRoutes = express.Router();
const courseModel = require("../CourseSchema/courseSchema");
const nodemailer = require("nodemailer");

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

  //Sending an email to the Instructor
  const output = `
      <p> You have a new course request</p>
      <h3> Course Details </h3>
      <ul> 
        <li> Course Name : ${req.body.courseName} </li>
        <li> Course Description : ${req.body.description} </li>
        <li> Duration : ${req.body.duration} </li>
        <li> Instructor Name : ${req.body.instructorName} </li>
        <li> Starting Date : ${req.body.startDate} </li>
        <li> Instructor Email : ${req.body.instructorEmail} </li>
      </ul>
      <h3> Message : </h3>
      <p> If email and instructor name is not yours please kindly inform to administrator(jahrinsrth@gmail.com), Thankyou </p>

      `;

  const email = req.body.instructorEmail;

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
    from: '"BRIGHTNERD 👻" <testjahrin@gmail.com>', // sender address
    to: email, //"fasrinaleem@gmail.com" // list of receivers
    subject: "New Course Allocation Request✔", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
});

//Update the course details
courseRoutes.route("/update/:id").post(function(req, res) {
  courseModel.findById(req.params.id, function(err, coursemodel) {
    if (!coursemodel) res.status(404).send("Data is not found");
    else coursemodel.courseName = req.body.courseName;
    coursemodel.description = req.body.description;
    coursemodel.instructorName = req.body.instructorName;
    coursemodel.startDate = req.body.startDate;
    coursemodel.duration = req.body.duration;
    coursemodel
      .save()
      .then(coursemodel => {
        res.json("Course Updated");
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });

  const output = `
      <p> You have a new course request</p>
      <h3> Course Details </h3>
      <ul> 
        <li> Course Name : ${req.body.courseName} </li>
        <li> Course Description : ${req.body.description} </li>
        <li> Duration : ${req.body.duration} </li>
        <li> Instructor Name : ${req.body.instructorName} </li>
        <li> Starting Date : ${req.body.startDate} </li>
        <li> Instructor Email : ${req.body.instructorEmail} </li>
      </ul>
      <h3> Message : </h3>
      <p> If email and instructor name is not yours please kindly inform to administrator(jahrinsrth@gmail.com), Thankyou </p>

      `;

  const email = req.body.instructorEmail;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "apinternationalpvtltd1@gmail.com", // generated ethereal user
      pass: "0776740966" // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"BRIGHTNERD 👻" <apinternationalpvtltd1@gmail.com>', // sender address
    to: email, //"fasrinaleem@gmail.com" // list of receivers
    subject: "New Course Allocation Request✔", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
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
});
module.exports = courseRoutes;

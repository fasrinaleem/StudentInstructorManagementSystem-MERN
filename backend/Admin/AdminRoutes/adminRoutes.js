const express = require("express");
const router = express.Router();
const Adminmodel = require("../AdminSchema/adminSchema");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const checkAuth = require("../../auth/checkAuthAdmin");

const jwt = require("jsonwebtoken");
const keys = require("../../config/key.json");
const JWT_KEY = keys.JWT_KEY;

//----------------------------------------------ADMIN RETRIEW ALL -------------
router.get("/admin/edit", (req, res) => {
  Adminmodel.find((err, admin) => {
    if (err) {
      console.log(err);
    } else {
      res.json(admin);
    }
  });
});
//--------------------------------------------------------------------------
router.get("/admin/edit/:id", (req, res) => {
  let id = req.params.id;
  Adminmodel.findById(id, (err, admin) => {
    res.json(admin);
  });
});

//--------------------------------------ADMIN ADD----------------------------------
router.post("/admin/add", (req, res) => {
  //let adminmodel  = new Adminmodel(req.body);

  // adminmodel.save().then( admin => {
  //     res.status(200).json({ "admin" :"admin added succesfuully" })
  // }).catch(err =>{
  //     res.status(400).send("adding new admin failed")
  // })
  //-------------------------

  Adminmodel.find({
    adminID: req.body.adminID
  })
    .exec()
    .then(admin => {
      if (admin.length >= 1) {
        res.status(409).json({
          message: "Admin already exists"
        });
      } else {
        const adminmodel = new Adminmodel({
          _id: mongoose.Types.ObjectId(),
          adminID: req.body.adminID,
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          userType: "admin"
        });

        adminmodel
          .save()
          .then(result => {
            console.log(result);
            res.status(201).json({
              message: "admin added",
              createdAdmin: result
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

  //--------------------------------------- ADMIN MAIL ------------------------
  const output = `
    <p> You have appointed as a Admin </p>
    <h3>Details</h3>
    <h4>Username and passowrd given below </h4>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>UserName: ${req.body.adminID}</li>
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
    subject: "New Admin Request", // Subject line
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
router.post("/admin/login", (req, res) => {
  //console.log(req.body.adminID)
  Adminmodel.find({ adminID: req.body.adminID })
    .exec()
    .then(admin => {
      console.log(admin);
      if (admin.length < 1) {
        return res.status(401).json({
          message: "Authorization Failed!"
        });
      }
      if (admin) {
        //correct password
        const token = jwt.sign(
          {
            id: admin[0]._id,
            adminID: admin[0].adminID,
            userType: admin[0].userType
          },
          JWT_KEY,
          {
            expiresIn: "1h"
          }
        );
        console.log(admin);
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

//------------------------------------ADMIN UPDATE-------------------------------
router.post("/admin/update/:id", (req, res) => {
  Adminmodel.findById(req.params.id, (err, admin) => {
    if (!admin) {
      res.status(404).send("data is not found");
    } else {
      (admin.adminID = req.body.adminID), (admin.name = req.body.name);
      admin.mail = req.body.email;
      admin.password = req.body.password;

      admin
        .save()
        .then(admin => {
          res.json("admin updated");
        })
        .catch(err => {
          res.status(400).send("updated not succesful");
        });
    }
  });
});

router.delete("/admin/delete/:id", (req, res) => {
  Adminmodel.findOneAndDelete({ _id: req.params.id }, (err, admin) => {
    if (err) {
      res.json(err);
    } else {
      res.json("deleted successfully");
    }
  });
});

// router.put("/admin/rtt", (req,res) =>{
//     res.send({ type: "put"})
// })

// router.delete("/admin/de" ,(req,res) => {
//     res.send({ type: "delete"})
// })

module.exports = router;

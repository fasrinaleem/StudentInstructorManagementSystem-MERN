const express = require("express");
const router = express.Router();
const Instructormodel = require("../Model/Instructor");
const CourseSchema = require("../Course/CourseSchema/courseSchema");

router.get("/test", (req, res) => res.json({ msg: "instructor Works" }));

//
router.get("/all", (req, res) => {
  Instructormodel.find((err, instructor) => {
    if (err) {
      console.log(err);
    } else {
      res.json(instructor);
    }
  });
});

//Get Instructor By ID
router.get("/edit/:id", (req, res) => {
  let id = req.params.id;
  Instructormodel.findById(id, (err, instructor) => {
    res.json(instructor);
  });
});

//add new Instructor
router.post("/add", (req, res) => {
  let instructormodel = new Instructormodel(req.body);

  instructormodel
    .save()
    .then(instructor => {
      res.status(200).json({ instructor: "instructor added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new instructor failed");
    });
});

//view all course for single Instructor
router.post("/:name", (req, res) => {
  let name = req.params.instructorName;
  CourseSchema.findOne({ instructorName: name }, (err, Course) => {
    res.json(Course);
  });
});

//Update instructor
router.post("/update/:id", (req, res) => {
  Instructormodel.findById(req.params.id, (err, instructor) => {
    if (!instructor) {
      res.status(404).send("data is not found");
    } else {
      instructor.name = req.body.name;
      instructor.mail = req.body.mail;
      instructor.contactNumber = req.body.number;
      instructor.dept = req.body.dept;
      instructor.title = req.body.title;
      instructor.password = req.body.password;

      instructor
        .save()
        .then(instructor => {
          res.json("instructor updated");
        })
        .catch(err => {
          res.status(400).send("updated not successfully");
        });
    }
  });
});

//instructor Delete
router.delete("/delete/:id", (req, res) => {
  Instructormodel.findOneAndDelete(
    { _id: req.params.id },
    (err, instructor) => {
      if (err) {
        res.json(err);
      } else {
        res.json("deleted successfully");
      }
    }
  );
});

// router.put("/admin/rtt", (req,res) =>{
//     res.send({ type: "put"})
// })

// router.delete("/admin/de" ,(req,res) => {
//     res.send({ type: "delete"})
// })

module.exports = router;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let schemaCourse = new Schema({
  courseName: {
    type: String
  },
  description: {
    type: String
  },
  instructorName: [
    {
      type: String,
      ref: "instructor"
    }
  ],
  startDate: {
    type: Date
  },
  duration: {
    type: String
  },
  instructorEmail: [
    {
      type: String,
      ref: "instructor"
    }
  ],
  mobileno: {
    type: String
  }
});

module.exports = mongoose.model("course", schemaCourse);

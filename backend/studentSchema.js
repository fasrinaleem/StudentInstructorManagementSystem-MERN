const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let schemaStudent = new Schema({
  studentName: {
    type: String
  },
  instructorName: {
    type: String
  },
  year: {
    type: String
  }
});

module.exports = mongoose.model("student", schemaStudent);

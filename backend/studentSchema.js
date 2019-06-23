const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let schemaStudent = new Schema({
  studentName: {
    type: String
  },
  email: {
    type: String
  },
  nic: {
    type: String
  },
  course: {
    type: String
  }
});

module.exports = mongoose.model("student", schemaStudent);

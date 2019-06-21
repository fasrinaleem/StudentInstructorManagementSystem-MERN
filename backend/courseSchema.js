const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let schemaCourse = new Schema({
  courseName: {
    type: String
  },
  instructorName: {
    type: String
  },
  year: {
    type: String
  }
});

module.exports = mongoose.model("course", schemaCourse);

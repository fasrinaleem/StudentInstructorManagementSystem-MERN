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
      type: Schema.Types.ObjectId,
      ref: "instructor"
    }
  ],
  startDate: {
    type: Date
  },
  duration: {
    type: String
  }
});

module.exports = mongoose.model("course", schemaCourse);

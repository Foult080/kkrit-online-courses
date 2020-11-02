const mongoose = require("mongoose");
const coursesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  desc: {
    type: String,
    required: true
  },
  lessons: [
    {
      title: {
        type: String,
        required: true,
      },
      src: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Courses = mongoose.model("courses", coursesSchema);

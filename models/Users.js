const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    dropDups: true,
  },
  avatar: {
    type: String
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "student"
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Users = mongoose.model("users", usersSchema);

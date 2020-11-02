const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const Courses = require("../models/Courses");

//@route POST api/courses
//@desc create new course
router.post(
  "/",
  auth,
  [check("name").not().isEmpty(), check("desc").not().isEmpty()],
  async (req, res) => {
    //check user role
    if (req.user.role !== "admin") {
      return res.status(401).json({ errors: [{ msg: "Недостаточно прав!" }] });
    }
    //valid data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //get data from req
      const { name, desc } = req.body;
      const picture = req.files.picture;
      picture.mv("./uploads/" + picture.name);
      //save data
      course = new Courses({
        name,
        picture: picture.name,
        desc,
        author: req.user.id,
      });
      await course.save();
      //send response
      res.json(course);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ errors: [{ msg: "Ошибка сервера" }] });
    }
  }
);

module.exports = router;
/*

  //get data from req
    const { name, picture, desc } = req.body;
    //create save obj
    let courseFields = {};
    if (name) courseFields.name = name;
    if (picture) courseFields.picture = picture;
    if (desc) courseFields.desc = desc;

    try {
      let course = await Courses.findOne({
        id: req.params.id,
      });
      if (course) {
        course = await Courses.findOneAndUpdate(
          { id: req.params.id },
          { $set: courseFields },
          { new: true, upsert: true }
        );
        res.json(course);
      }
      course = new Courses(courseFields);
      await course.save();
      res.json(course);

*/

const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const config = require("config");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const Users = require("../models/Users");

//@route POST api/users
//@desc register new user
router.post(
  "/",
  [
    check("name", "Укажите имя пользователя").not().isEmpty(),
    check("email", "Укажите корректный email").isEmail(),
    check("password", "Укажите пароль длинной не менее 8 символов").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    //valid data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //get data from req
    const { name, email, password, role } = req.body;
    try {
      //check email
      let user = await Users.findOne({ email });
      if (user) {
        res
          .status(400)
          .json({ errors: [{ msg: "Пользователь уже зарегистрирован" }] });
      }
      //add avatar
      const avatar = gravatar.url(email, {
        s: "200",
      });
      //create user obj
      user = new Users({ name, email, password, role, avatar });
      //generate salt
      const salt = await bcrypt.genSalt(10);
      //hash password
      user.password = await bcrypt.hash(password, salt);
      //save user to db
      await user.save();
      //gen token
      const payload = { user: { id: user.id } };
      jwt.sign(
        payload,
        config.get("JWT"),
        { expiresIn: 21600 },
        (err, token) => {
          if (err) throw err;
          else res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ errors: [{ msg: "Ошибка сервера" }] });
    }
  }
);

module.exports = router;

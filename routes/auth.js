const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const Users = require("../models/Users");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// @route POST api/auth
// @desc authenticate user and get token
router.post(
  "/",
  [
    check("email", "Укажите корректный адрес электронной почты").isEmail(),
    check("password", "Укажите верный пароль").not().isEmpty().exists(),
  ],
  async (req, res) => {
    //check errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //get data from req
    const { email, password } = req.body;
    try {
      //check user
      let user = await Users.findOne({ email });
      if (!user) {
        res.status(401).json({ errors: [{ msg: "Неверные данные" }] });
      }
      console.log(user);
      //check pass
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ errors: [{ msg: "Неверные данные" }] });
      }

      //gen token
      const payload = {
        user: {
          id: user.id,
          role: user.role,
        },
      };

      jwt.sign(
        payload,
        config.get("JWT"),
        { expiresIn: 21600 },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Ошибка сервера");
    }
  }
);

// @route GET api/auth
// @desc get user
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Ошибка сервера");
  }
});

module.exports = router;

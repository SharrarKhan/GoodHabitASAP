const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/users");
const authHelpers = require("../auth/helpers");
const passport = require("../auth/passport");

router.post("/signup", async (req, res, next) => {
  console.log("body:", req.body);

   try {

      const passwordDigest = await authHelpers.hashPassword(req.body.password);

      let userInfo = {
          username: req.body.username,   
          password: passwordDigest
      }

      let newUser = await userQueries.addNewUser(userInfo);

      res.json({
        payload: newUser,
        message: "Created a new user",
        err: false
      });

  } catch(error) {
    res.status(500);
    res.json({
      payload: null,
      msg: "Failed to create a new user",
      err: true
    });
  }
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
    console.log(req.body);
    res.json({
        payload: true,
        msg: "User successfully logged in",
        err: false
    });
});

router.get("/logout", authHelpers.loginRequired, (req, res, next) => {
    req.logout(); // Will remove user from session
    res.json({
      payload: null,
      msg: "User logged out successfully",
      err: false
    });
});

router.get("/isUserLoggedIn", authHelpers.loginRequired, (req, res, next) => {
    res.json({
      payload: req.user,
      msg: "User is logged in. Session active",
      err: false
    });
});

module.exports = router;
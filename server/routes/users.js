const express = require('express');
const router = express.Router();
const userQueries = require("../db/queries/users");
const { loginRequired } = require("../auth/helpers");

router.get('/', loginRequired, async (req, res, next) => {
  console.log(req.session);
  try {
      let users = await userQueries.getAllUsers();
      res.json({
        payload: users,
        message: "Retrieved all users",
        err: false
      });

  } catch(error) {
    res.status(500);
    res.json({
      payload: null,
      msg: "Failed to retrieve all users",
      err: true
    });
  }
});

module.exports = router;
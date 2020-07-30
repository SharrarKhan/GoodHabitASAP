const express = require('express');
const router = express.Router();
const habitsQuries = require("../db/queries/habits");

router.get('/', async (req, res, next) => {
  console.log("GET method for getting all habits started");
  try {
    let habits = await habitsQuries.getAllHabits();
    res.json({
      payload: habits,
      msg: "Retrieved all habits",
      err: false
    });
    
  } catch (err) {
    res.status(500);
    res.json({
      payload: null,
      msg: "Failed to retrieve all habits",
      err: true
    });
  }
});

router.post("/", async (req, res, next) => {
    console.log("POST method for adding a new habit started");
    console.log("req.body:", req.body);
    console.log("req.user:", req.user); // req.user is undefined
    console.log("habit route req.user:", req.user.id);
    let copy = { ...req.body, user_id: req.user.id };


    // add req.user tp req.body
    try {
    let habit = await habitsQuries.addHabit(copy);
    res.json({
      payload: habit,
      msg: "Added a habit",
      err: false
    });
    
    } catch (err) {
        res.status(500);
        res.json({
            payload: null,
            msg: "Failed to add a habit",
            err: true
        });
    }
});

router.get("/:habit_name", async (req, res, next) => {
  console.log("GET method for getting a habit by name started");
  let habitName = req.params.habit_name;
  try {
    let habit = await habitsQuries.getHabitByName(habitName);
    res.json({
      payload: habit,
      msg: "Retrieved habit by habit name",
      err: false
    });

  } catch (err) {
    res.status(500);
    res.json({
      payload: null,
      msg: "Failed to retrieve habit by habit name",
      err: true
    });
  }
});

router.get("/habit_info/:id", async (req, res, next) => {
  console.log("GET method for getting a habit by id started");
  let habitId = req.params.id;
  try {
    let habit = await habitsQuries.getHabitById(habitId);
    res.json({
      payload: habit,
      msg: "Retrieved habit by habit id",
      err: false
    });

  } catch (err) {
      console.log("ERROR:", err);
      res.status(500);
      res.json({
        payload: null,
        msg: "Failed to retrieve habit by habit id",
        err: true
      });
  }
});

router.get("/user/:username", async (req, res, next) => {
    console.log("GET method for getting all habits by username started");
    let username = req.params.username;
    console.log(username)
    try {
        let habits = await habitsQuries.getShowsByUserId(userId);
        console.log(habits)
        res.json({
            payload: habits,
            msg: "Retrieved habits by user Id",
            err: false
        });

    } catch (err) {
        res.status(500);
        res.json({
            payload: null,
            msg: "Failed to retrieve habits by user Id",
            err: true
        });
    }
});

module.exports = router;
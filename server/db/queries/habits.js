const db = require("../db");

const getAllHabits = async () => {
    try {
        const selectQuery = `
            SELECT * 
            FROM habit
        `;
        const result = await db.any(selectQuery);
        return result;

    } catch (err) {
        console.log("ERROR:", err);
    }
}

const addHabit = async (habitToAdd) => {
    console.log("addHabit function starting in the queries habits.js");
    console.log("habitToAdd:", habitToAdd);
    const { user_id, habit_name, description, created_at, triggers_to_avoid } = habitToAdd;
    console.log("ALL VALUES SENT:", [user_id, habit_name, description, created_at, triggers_to_avoid]);
    try {
        console.log("try starting in addHabit function in habits.js queries");
        let resultArr = [];
        console.log("resultArr:", resultArr);
        const insertQuery1 = `
            INSERT INTO habit (user_id, habit_name, description, created_at) 
            VALUES ($1, $2, $3, $4)
            RETURNING *
        `;
        const newHabit = await db.any(insertQuery1, [user_id, habit_name, description, created_at, triggers_to_avoid]); // it was db.one before i changed it to db.any
        console.log("newHabit variable after insertQuery1:", newHabit);
        resultArr.push(newHabit);  
        console.log("resultArr after pushing newHabit variable:", resultArr);
        console.log("Now making select query to get the habit_id");
        console.log("resultArr[0][0].created_at", resultArr[0][0].created_at);
        const getHabitId = await db.oneOrNone(`
            SELECT id 
            FROM habit
            WHERE created_at = $1
        `, [resultArr[0][0].created_at]);
        console.log("getHabitId:", getHabitId);
        const insertQuery2 = `
            INSERT INTO triggers (body, habit_id, created_at) 
            VALUES ($1, $2, $3)
            RETURNING *
        `;
        const newTriggers = await db.any(insertQuery2, [triggers_to_avoid, getHabitId.id, new Date()]); // it was db.one before i changed it to db.any
        resultArr.push(newTriggers); 
        console.log("resultArr:", resultArr);

        return resultArr; // combine results to return 1 result, copy the result then add result description, then return the obj
    // can use spread operator // previous query returns habit id pass as a parameter
    
    } catch (err) {
        console.log("ERROR:", err);
    }
}

const getHabitByHabitName = async (habit) => {
    try {
        const result = await db.any("SELECT * FROM habit WHERE habit = $1", [habit]);
        console.log("habit:", result);
        return result;

    } catch (err) {
        console.log("ERROR:", err);
    }
}

const getHabitById = async (id) => {
    try {
        console.log("getHabitById function is starting");
        const result = await db.any("SELECT * FROM habit where id = $1", [id]);
        console.log("result:", result);
        return result;

    } catch (err) {
        console.log("ERROR:", err);
    }
}

const getUserHabits = async (searchUsername) => {
    try {
        const habits = await db.any("SELECT * FROM habit JOIN users on username = users.username WHERE username = $1", [username]);
        console.log("habits:", habits);
        return habits;

    } catch (err) {
        console.log("ERROR:", err);
    }
}

module.exports = {
    getAllHabits,
    addHabit,
    getHabitByHabitName,
    getHabitById,
    getUserHabits
}
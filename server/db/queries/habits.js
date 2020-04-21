const db = require("../db");

const getAllHabits = async () => {
    try {
        const selectQuery = `
            SELECT * 
            FROM habits
        `;
        const result = await db.any(selectQuery);
        return result;

    } catch (err) {
        console.log("ERROR:", err);
    }
}

const addHabit = async (habitToAdd) => {
    const { user_id, habit_name, habit_description, created_at, triggers_to_avoid } = habitToAdd;
    console.log("ALL VALUES SENT:", [user_id, habit_name, habit_description, created_at, triggers_to_avoid]);
    try {
        let resultArr = [];
        const insertQuery1 = `
            INSERT INTO habits (user_id, habit_name, triggers_to_avoid, habit_description, created_at) 
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `;
        const newHabit = db.any(insertQuery, [habit, username, num_of_reminders, habit_description]); // it was db.one before i changed it to db.any
        resultArr.push(newHabit);  

        const insertQuery2 = `
            INSERT INTO triggers (body, habit_id, created_at) 
            VALUES ($1, $2, $3,)
            RETURNING *
        `;
        const newTriggers = db.any(insertQuery2, [triggers_to_avoid, resultArr[0].id, Math.floor(Date.now() / 1000)]); // it was db.one before i changed it to db.any
        resultArr.push(newTriggers); 


        return resultArr; // combine results to return 1 result, copy the result then add result description, then return the obj
    // can use spread operator // previous query returns habit id pass as a parameter
    
    } catch (err) {
        console.log("ERROR:", err);
    }
}

const getHabitByHabitName = async (habit) => {
    try {
        const result = await db.any("SELECT * FROM habits WHERE habit = $1", [habit]);
        console.log("habit:", result);
        return result;

    } catch (err) {
        console.log("ERROR:", err);
    }
}

const getUserHabits = async (searchUsername) => {
    try {
        const habits = await db.any("SELECT * FROM habits JOIN users on username = users.username WHERE username = $1", [username]);
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
    getUserHabits
}
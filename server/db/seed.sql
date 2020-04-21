DROP DATABASE IF EXISTS good_habit_progress_app_database;
CREATE DATABASE good_habit_progress_app_database;

\c good_habit_progress_app_database;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE,
    password_digest VARCHAR NOT NULL
    -- full_name VARCHAR NOT NULL,
    -- created_at TIMESTAMP 
);

CREATE TABLE habit (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users (id),
    habit_name VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    created_at TIMESTAMP
);

CREATE TABLE triggers (
    id SERIAL PRIMARY KEY,
    body VARCHAR,
    habit_id INT REFERENCES habit (id),
    created_at TIMESTAMP
);

CREATE TABLE check_in (
    id SERIAL PRIMARY KEY,
    habit_id INT REFERENCES habit (id),
    created_at TIMESTAMP
);

-- CREATE TABLE reminders (
--     id SERIAL PRIMARY KEY,
--     habit_id INT REFERENCES id (habits),
--     day_of_week INT,
--     time_of_day TIME
-- );
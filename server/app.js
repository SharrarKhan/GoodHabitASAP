const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require("express-session");
const passport = require("./auth/passport");
const cors = require("cors");
const helpers = require("./auth/helpers");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require("./routes/auth");
const habitsRouter = require("./routes/habits");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: "NOT_A_GOOD_SECRET",
    resave: false,
    saveUninitialized: true
}));
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/auth", authRouter);
app.use("/habits", helpers.loginRequired, habitsRouter);

module.exports = app;
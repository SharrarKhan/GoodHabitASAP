const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
    console.log("hashPassword function in helpers.js starting");
    try {
        const salt = await bcrypt.genSalt(12);
        const password_digest = await bcrypt.hash(password, salt);
        console.log("salt:", salt);        
        console.log("password_digest:", password_digest);
        return password_digest;

    } catch(error) {
        console.log("ERROR:", error);

    }
}

const comparePasswords = (candidatePassword, password_digest) => {
    console.log("comparePasswords function in helpers.js starting");
    console.log(candidatePassword, password_digest);
    try {
        const match = bcrypt.compare(candidatePassword, password_digest);
        return match;

    } catch (err) {
        console.log("ERROR:", err);
    }
}

const loginRequired = (req, res, next) => {
    console.log("loginRequired function in helpers.js starting");
    console.log(req.session);
    if(req.user) return next()
    res.status(401).json({
        payload: null,
        msg: "You need to logged in to access this route",
        err: true
    });
}

module.exports = {
    hashPassword,
    comparePasswords,
    loginRequired
}
const User = require("../models/user");
const { body, validationResult } = require("express-validator");

exports.example = (req, res, next) => {
	res.send("HAHA");
};

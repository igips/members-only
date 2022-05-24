const Message = require("../models/message");
const { body, validationResult } = require("express-validator");


exports.example = (req, res) => {
	res.send("HAHA");
};
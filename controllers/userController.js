const User = require("../models/user");
const { body, check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const passport = require("passport");

exports.signUp = [
	body("username").trim().escape(),
	body("password").trim().escape(),
	(req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return next(errors);
		} else {
			User.findOne({ username: { $regex: "^" + req.body.username + "$", $options: "i" } }).exec(
				(err, foundUser) => {
					if (err) {
						return next(err);
					}

					if (foundUser) {
						res.json("User already exists!");
					} else {
						bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
							if (err) {
								return next(err);
							}

							const user = new User({
								username: req.body.username,
								password: hashedPassword,
								memberStatus: "user",
							}).save((err) => {
								if (err) {
									return next(err);
								}
								res.json("success");
							});
						});
					}
				}
			);
		}
	},
];

exports.signIn = [
	check("username").trim().escape(),
	check("password").trim().escape(),
	(req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return next(errors);
		} else {
			passport.authenticate("local", (err, user, info) => {
				if (err) {
					return next(err);
				}
				if (!user) {
					return res.json({ message: info.message });
				}
				req.logIn(user, (err) => {
					if (err) {
						next(err);
					}
					res.json(user);
				});
			})(req, res, next);
		}
	},
];

exports.checkUser = (req, res, next) => {
	res.json(req.user);
};

exports.signOut = (req, res, next) => {
	req.logOut((err) => {
		if (err) {
			return next(err);
		}
		res.json("success");
	});
};

const Message = require("../models/message");
const { body, validationResult } = require("express-validator");

exports.message = [
	body("title").trim().escape(),
	body("message").trim().escape(),
	body("user").escape(),
	(req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return next(errors);
		} else {
			const message = new Message({
				title: req.body.title,
				message: req.body.message,
				user: req.body.user,
				avatar: req.body.avatar,
				timeStamp: Date.now(),
			});

			message.save((err) => {
				if (err) {
					return res.status(err.status).json({error: err}); 
				}

				res.json(message);
			});
		}
	},
];

exports.getMessages = (req, res, next) => {
	Message.find({})
		.populate("user")
		.exec((err, messages) => {
			if (err) {
				return res.status(err.status).json({error: err}); 
			}

			messages.reverse();

			res.json(messages);
		});
};

exports.deleteMessage = (req, res, next) => {
	Message.findByIdAndRemove(req.params.id, (err) => {
		if (err) {
			return res.status(err.status).json({error: err}); 
		}
	
		Message.find({})
			.populate("user")
			.exec((err, messages) => {
				if (err) {
					return res.status(err.status).json({error: err}); 
				}

				messages.reverse();

				res.json(messages);
			});
	});
};

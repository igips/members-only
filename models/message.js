const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({});

// MessageSchema.virtual("url").get(function () {
// 	return "/message/" + this._id;
// });

module.exports = mongoose.model('Message', MessageSchema);
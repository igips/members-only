const express = require("express");
const router = express.Router();
const { body,validationResult } = require('express-validator');

const userController = require("../controllers/userController");
const messageController = require("../controllers/messageController");

router.post('/signUp', (req, res, next) => {
    // res.json({ message: "Hello from server!" });
    console.log(req.body.username);
    // res.json();
    

});

router.get("/*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

module.exports = router;

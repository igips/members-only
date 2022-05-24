const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const messageController = require("../controllers/messageController");

router.get('/', (req, res, next) => {
    res.json({ message: "Hello from server!" });
    
});

router.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

module.exports = router;

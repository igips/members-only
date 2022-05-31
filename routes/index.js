const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const messageController = require("../controllers/messageController");

router.post("/signUp", userController.signUp);

router.post("/signIn", userController.signIn);

router.get("/checkUser", userController.checkUser);

router.get("/signOut", userController.signOut);

router.get("/*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

module.exports = router;

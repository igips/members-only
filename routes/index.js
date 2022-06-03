const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const messageController = require("../controllers/messageController");

router.post("/signUp", userController.signUp);

router.post("/signIn", userController.signIn);

router.put("/admin/:id", userController.admin);

router.put("/member/:id", userController.member);

router.post("/signOut", userController.signOut);

router.post("/message", messageController.message);

router.delete("/message/:id", messageController.deleteMessage);

router.get("/user", userController.checkUser);

router.get("/messages", messageController.getMessages);


router.get("/*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

module.exports = router;

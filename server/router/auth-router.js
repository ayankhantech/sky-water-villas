const express = require("express");
const { home, register, login, contact, userData, service } = require("../controllers/auth-controller");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(home);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/contact").post(contact);
router.route("/service").get(service);


router.route("/userData").get(authMiddleware, userData); 

module.exports = router;

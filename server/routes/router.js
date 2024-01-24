const express = require("express");
const router = express.Router();
const controllerLogin = require("../controllers/login");
const emailController = require("../controllers/email");

router.get("/callback", controllerLogin.callbackCheck);
router.get("/login", controllerLogin.handleLoginRequest);
router.get("/find-latest-email-inbox", emailController.findLatestEmailInInbox);

module.exports = router;
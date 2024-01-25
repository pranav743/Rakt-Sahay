const express = require("express");
const router = express.Router();
const controllerLogin = require("../controllers/login");

router.get("/callback", controllerLogin.callbackCheck);
router.get("/login", controllerLogin.handleLoginRequest);


module.exports = router;
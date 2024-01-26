const express = require("express");
const router = express.Router();
const controllerLogin = require("../controllers/login");
const controllerEmergencyRequests = require("../controllers/emergencyRequests");

router.get("/callback", controllerLogin.callbackCheck);
router.get("/login", controllerLogin.handleLoginRequest);
router.get("/emergency-requests/all", controllerEmergencyRequests.getAllEmergencyRequests);
router.get("/post-emergency-requests", controllerEmergencyRequests.postEmergencyRequest);
router.get("/logout", controllerLogin.logoutUser);


router.post("/anyuser", controllerLogin.getUserWithAccessToken);
router.post("/register-user", controllerLogin.registerUser);





module.exports = router;
const express = require("express");
const router = express.Router();
const controllerLogin = require("../controllers/login");
const controllerEmergencyRequests = require("../controllers/emergencyRequests");

router.get("/callback", controllerLogin.callbackCheck);
router.get("/login", controllerLogin.handleLoginRequest);
router.get("/emergency-requests/all", controllerEmergencyRequests.getAllEmergencyRequests);
router.get("/post-emergency-requests", controllerEmergencyRequests.postEmergencyRequest);


router.post("/anyuser", controllerLogin.getUserWithAccessToken);



module.exports = router;
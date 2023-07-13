const express = require("express");
const dataRouter = require("../Controller/control");

const router = express.Router();

// router.post("/saveData", dataRouter.saveData);
router.post("/login", dataRouter.Login);

module.exports = router;

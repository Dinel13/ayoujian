const express = require("express");

const guruController = require("../controllers/guru-controllers");

const router = express.Router();

router.post("/signup", guruController.signup);

router.post("/login", guruController.login);

module.exports = router;

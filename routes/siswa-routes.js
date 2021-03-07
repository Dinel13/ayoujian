const express = require("express");

const siswaController = require("../controllers/siswa-controllers");

const router = express.Router();

router.post("/signup", siswaController.signup);

router.post("/login", siswaController.login);

module.exports = router;

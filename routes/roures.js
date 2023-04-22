var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");

router.get("/users", userController.doGetUser);
router.post("/users/regist", userController.doRegistUser);

module.exports = router;

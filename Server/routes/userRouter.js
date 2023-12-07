const { Router } = require("express");
const userController = require("../controllers/userController");
const router = Router();

/* GET index page. */
router.post("/user", userController.createUser);

module.exports = router;

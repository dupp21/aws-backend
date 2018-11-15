const express = require("express");
const router = express.Router();

const USerController = require("../controllers/UserController");

router.get("/", USerController.getAll);
router.post("/", USerController.createUser);
router.delete("/:id", USerController.deleteUser);
module.exports = router;

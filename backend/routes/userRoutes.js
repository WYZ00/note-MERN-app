const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

router.get("/", getAllUsers);
router.post("/", createNewUser);
router.patch("/", updateUser);
router.delete("/", deleteUser);

module.exports = router;

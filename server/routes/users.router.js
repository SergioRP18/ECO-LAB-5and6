const express = require("express");
const {
  createUserController, // Cambiado de createUser a createUserController
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", createUserController); // Cambiado a createUserController
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
const { Router } = require("express");
const {
  getAllUsers,
  createUserProfile,
  getUserById,
  deleteUserById,
  updateUserById,
} = require("../controller/userController");
const router = Router();
router.get("/getUsers", getAllUsers);
router.get("/getUserById/:userId", getUserById);
router.post("/createUserProfile", createUserProfile);
router.delete("/deleteUserById/:userId", deleteUserById);
router.patch("/updateUserById/:userId", updateUserById);
module.exports = router;

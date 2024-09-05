const router=require("express").Router();
const userController=require("../userControllers with json/user.controller")

router.get("/getAllUsers", userController.getAllUsers)

router.get("/user/:id", userController.getUserById)

router.post("/addUser", userController.addUser)

router.put("/updateUser", userController.updateUser)

router.delete("/deleteUser", userController.deleteUser)


module.exports=router
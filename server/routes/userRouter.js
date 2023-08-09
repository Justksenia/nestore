const Router=require("express");
const router=new Router();

const userController=require("../controller/userController");
const authMiddleware=require("../middleware/authMiddleware");

router.post("/registration", userController.registration)
router.post ("/login", userController.login)

router.get ("/auth", authMiddleware, userController.checks)

router.get("/:id/basket", userController.getBasket)

router.post("/basket/:id", userController.addDevice)
router.delete("/basket/:id", userController.deleteAllDevices)
router.delete("/:id/basket/device", userController.deleteDevice)
router.post("/:id/basket/device", userController.addOneDevice)
module.exports=router
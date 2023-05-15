const Router=require("express");
const router=new Router();

const userController=require("../controller/userController");
const authMiddleware=require("../middleware/authMiddleware");

router.post("/registration", userController.registration)
router.post ("/login", userController.login)

router.get ("/auth", authMiddleware, userController.checks)

router.get("/:id/basket", userController.getBasket)
router.post ("/:id/basket", userController.createBasket)
router.post("/basket/:id", userController.addDevice)
router.delete("/basket/:id", userController.deleteDevice)


module.exports=router
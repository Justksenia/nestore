const Router=require("express");
const router=new Router();
const checkRole=require("../middleware/checkRoleMiddleware")

const deviceController=require("../controller/deviceController")
router.post("/", checkRole("ADMIN"), deviceController.create)
router.get ("/", deviceController.getAll)
router.get ("/:id", deviceController.getOne)

module.exports=router
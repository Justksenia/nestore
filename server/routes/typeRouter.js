const Router=require("express");
const router=new Router();

const typeController=require("../controller/typeController");

const checkRole=require("../middleware/checkRoleMiddleware")

router.post("/", checkRole("ADMIN"),typeController.create);
router.delete("/:id", checkRole("ADMIN"),typeController.deleteId);
router.get ("/", typeController.getAll);

module.exports=router
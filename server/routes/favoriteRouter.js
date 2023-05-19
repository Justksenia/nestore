const Router=require("express");
const router=new Router();

const favoriteController=require("../controller/favoriteController")

router.get("/:id", favoriteController.getFavorite)
router.post("/", favoriteController.createFavorite)
router.delete("/", favoriteController.deleteFavorite)

module.exports=router
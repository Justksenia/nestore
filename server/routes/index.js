const Router=require("express");
const router=new Router();

const deviceRouter=require("./deviceRouter");
const brandRouter=require("./brandRouter");
const userRouter=require("./userRouter");
const typeRouter=require("./typeRouter");
const favoriteRouter=require("./favoriteRouter")


router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/device", deviceRouter);
router.use("/favorite", favoriteRouter);



module.exports=router
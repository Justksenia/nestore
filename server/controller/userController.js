const ApiError = require("../error/ApiError");
const bcrypt=require("bcrypt");
const webToken=require("jsonwebtoken");
const {Basket, User, BasketDevice}=require("../models/models");


const generateToken=(id, email, role)=>{
    return webToken.sign(
        {id, email, role}, 
        process.env.SECRET_KEY, 
        {expiresIn:"24h"})
}


class UserController {
    async registration (req, res, next) {
        const {email, password, role}=req.body
        if(!email || !password) {
            return next(ApiError.badRequest("Некорректный емайл или пароль"))
        }
        const candidate=await User.findOne({where:{email}})
        if(candidate) {
            return next(ApiError.badRequest("Пользователь с таким емайл уже существует"))
        }
        const hashPassword=await bcrypt.hash(password, 5);
        const user = await User.create({email, role, password:hashPassword})
        const basket=await Basket.create({userId:user.id});
        const jwt=generateToken(user.id, user.email, user.role)
            return res.json({jwt})


    }
    async login (req, res, next) {
        const {email, password}=req.body
        const user=await User.findOne({where: {email}})
        if(!user) {
            return next(ApiError.badRequest("Такого пользователя не существует"))
        }
        let validPassword=bcrypt.compareSync(password, user.password)
        if(!validPassword) {
            return next(ApiError.badRequest("Неверный пароль"))
        }
        const jwt=generateToken(user.id, user.email, user.role)
        return res.json({jwt})
  
    }
    async checks (req, res, next) {
        const token=generateToken(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }

    async basket (req,res,next) {

    }
    async basketAdd(req,res,next) {
        //если устройства с таким ид нет, то будет ошибка добавления
        const {deviceId}=req.body
        const {id}=req.params
        const userId=await Basket.findOne({where:{id}})

        const basket=await BasketDevice.create({userId, deviceId})
        return res.json(basket)
    }
}

module.exports=new UserController();
const ApiError = require("../error/ApiError");
const bcrypt=require("bcrypt");
const webToken=require("jsonwebtoken");
const {User, BasketDevice, Devices, Brand, DeviceInfo}=require("../models/models");



const generateToken=(id, email, role)=>{
    return webToken.sign(
        {id, email, role}, 
        process.env.SECRET_KEY, 
        {expiresIn:"24h"})
}


class UserController {
    async registration (req, res, next) {
        const {email, name, password, role}=req.body
        if(!email || !password) {
            return next(ApiError.badRequest("Некорректный емайл или пароль"))
        }
        const candidate=await User.findOne({where:{email}})
        if(candidate) {
            return next(ApiError.badRequest("Пользователь с таким емайл уже существует"))
        }
        const hashPassword=await bcrypt.hash(password, 5);
        const user = await User.create({email, name, role, password:hashPassword})
        const jwt=generateToken(user.id, user.email, user.name, user.role)
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
        const jwt=generateToken(user.id, user.email, user.role, user.name)
        return res.json({jwt})
  
    }
    async checks (req, res, next) {
        const token=generateToken(req.user.id, req.user.email, req.user.role, req.user.name)
        return res.json({token})
    }

    async createBasket (req,res, next) {
        try {
            
            let {userId,deviceId} = req.body;
            const basket=await BasketDevice.create({
                userId,
                deviceId
            })
        return res.status(201).json(basket)
    } catch(e) {
        next(ApiError.badRequest(e.message))
    }
}


    async getBasket(req,res,next) {
     const {id}=req.params
        try {
            const basket=await Devices.findAll({
                include:[
                    {
                        model:BasketDevice,
                                where:{
                                userId: id
                            }},
                        {model:Brand},
                        {model:DeviceInfo}
                ]       
                    } 
                )
            return res.json(basket)
        }
       catch (e) {
        next(ApiError.badRequest(e.message))
       }
    }

    async addDevice (req,res,next) {
        try {
            let {userId}=req.params
           let {deviceId}=req.body;
           const device=await BasketDevice.create({
            userId,deviceId
           })
           return res.status(201).json(device)
        }  catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async deleteDevice (req,res,next) {
        try {
            let {id}=req.body
           const device=await BasketDevice.destroy({
            where: {
                id
            }
         
           })
           return res.status(204).json(device)
        }  catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async deleteAllDevices(req,res,next) {
        try {
            let {deviceId}=req.params
            const device=await BasketDevice.destroy({
                where: {
                    deviceId
                }
            })
            return res.status(204).json(device)
        }  catch(e) {
            next(ApiError.badRequest(e.message))
        }
        }
    
}

module.exports=new UserController();
const {Type}=require("../models/models");
const ApiError=require("../error/ApiError")


class TypeController {
    async create (req, res) {
        const {name}=req.body
        const type=await Type.create({name})
        return res.json(type)
    }
    async getAll (req, res) {
        const type=await Type.findAll();
        return res.json(type)
    }
    async deleteId(req,res) {
        let {id}=req.params
        const type=await Type.destroy({where:{id}})
        return res.status(200).json(type)


    }
}

module.exports=new TypeController();
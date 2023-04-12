const { Devices, DeviceInfo, Type, Brand } = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info} = req.body;
      const { img } = req.files;
      
      let filename = uuid.v4() + ".jpg";
      

      img.mv(path.resolve(__dirname, "..", "static", filename));
      const device = await Devices.create({
        name,
        price,
        brandId,
        typeId,
        img: filename
            });

      if (info) {
        info = JSON.parse(info);
        info.forEach((element) => {
          DeviceInfo.create({
            title: element.title,
            desc: element.desc,
            deviceId: device.id,
          });
        });
      }

      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res, next) {
    let { brandId, typeId, limit, page } = req.query;

    let devices;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    if (!brandId && !typeId) {
      devices = await Devices.findAndCountAll({ 
        
        include:[
          {model:Type},
          {model:Brand},
          {model:DeviceInfo}
        ],
        limit, offset });
    }
    if (brandId && !typeId) {
      devices = await Devices.findAndCountAll({
        include:[
          {model:Type},
          {model:Brand},
          {model:DeviceInfo}
        ],
        where: { brandId },
        limit,
        offset,
      });
    }
    if (!brandId && typeId) {
      devices = await Devices.findAndCountAll({
        where: { typeId },
        limit,
        offset,
        include:[
          {model:Type},
          {model:Brand},
          {model:DeviceInfo}
        ],
      });
    }
    if (brandId && typeId) {
      devices = await Devices.findAndCountAll({
        where: { typeId, brandId },
        include:[{
          model:Type}],
        limit,
        offset,
        include:[
          {model:Type},
          {model:Brand},
          {model:DeviceInfo}
        ],
      });
    }

    return res.json(devices);
  }

  async getOne(req, res) {
    const {id}=req.params
    const device=await Devices.findOne({
        where:{id},
        include:[
          {model:Type},
          {model:Brand},
          {model:DeviceInfo}
        ],
    })
    return res.json(device)
  }
}

module.exports = new DeviceController();

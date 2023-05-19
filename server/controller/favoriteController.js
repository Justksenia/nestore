const {
  FavoriteDevice,
  Devices,
  Brand,
  DeviceInfo,
} = require("../models/models");
const ApiError = require("../error/ApiError");

class FavoriteController {
  async getFavorite(req, res, next) {
    try {
      const { id } = req.params;
      const favorite = await Devices.findAll({
        include: [
          {
            model: FavoriteDevice,
            where: {
              userId: id,
            },
          },
          { model: Brand },
          { model: DeviceInfo },
        ],
      });
      return res.json(favorite);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async createFavorite(req, res, next) {
    try {
      let { userId, deviceId } = req.body;
      const favorite = await FavoriteDevice.create({
        userId,
        deviceId,
      });
      return res.status(201).json(favorite);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async deleteFavorite(req, res, next) {
    try {
      let { id } = req.body;
      const favorite = await FavoriteDevice.destroy({
        where: {
          id,
        },
      });
      return res.status(204).json(favorite);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new FavoriteController();

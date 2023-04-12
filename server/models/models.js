const sequelize=require("../db");
const {DataTypes}=require("sequelize");


const User=sequelize.define("user", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    email: {type: DataTypes.STRING, unique:true},
    password:{type:DataTypes.STRING}, 
    role: {type:DataTypes.STRING, defaultValue:"USER"}
})
const Basket=sequelize.define("basket", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})
const BasketDevice=sequelize.define("basket_device", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})

// const Device=sequelize.define("device", {
//     id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
//     name: {type: DataTypes.STRING, allowNull:false },
//     price: {type: DataTypes.INTEGER, allowNull:false},
//     rating: {type:DataTypes.INTEGER, defaultValue:0},
//     img: {type: DataTypes.STRING, allowNull:false},
 

// }, {timestamps:false, freezeTableName: true})

const Devices=sequelize.define("devices", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull:false },
    price: {type: DataTypes.INTEGER, allowNull:false},
    rating: {type:DataTypes.INTEGER, defaultValue:0},
    img: {type: DataTypes.STRING, allowNull:false},
 

}, {timestamps:false, freezeTableName: true})


const Type=sequelize.define("type", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING, unique:true, allowNull:false}
}, {timestamps:false})

const Brand=sequelize.define("brand", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING, unique:true, allowNull:false}
},{timestamps:false})

const Rating=sequelize.define("rating", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    rate: {type:DataTypes.INTEGER, allowNull:false}
})

const DeviceInfo=sequelize.define("device_info" , {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title: {type:DataTypes.STRING,allowNull:false}, 
    desc: {type: DataTypes.STRING, allowNull:false}
})

const TypeBrand=sequelize.define("type_brand", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING}
})




User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Devices)
Devices.belongsTo(Type)

Brand.hasMany(Devices)
Devices.belongsTo(Brand)

Devices.hasMany(Rating)
Rating.belongsTo(Devices)

Devices.hasMany(BasketDevice)
BasketDevice.belongsTo(Devices)

Devices.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Devices)

Type.belongsToMany(Brand, {through:TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})






module.exports= {
    User, Basket, BasketDevice, Devices, Type, Brand, Rating, TypeBrand, DeviceInfo
}


export interface IType {
    id:number
    name:string
}

export interface IBrand {
    id:number
    name:string
}
export interface IDeviceInfos {
    id:number,
    title:string,
    desc:string,
    deviceId:number
}

export interface IDevice {
    brand:IBrand,
    brandId:number,
    device_infos: IDeviceInfos[],
    id:number,
    img:string,
    name:string,
    price:number,
    rating:number,
    type:IType,
      typeId:number,
      
}
export interface IFavoriteDevice{
    id: number, 
    userId: number, 
    deviceId: number
}

export interface IFavorite {
    brand:IBrand,
    brandId:number,
    device_infos:IDeviceInfos[],
    favorite_devices: IFavoriteDevice[],
    id:number,
    img:string,
    name:string, 
    price:number,
    rating:number,
    typeId:number
}

export interface IFavoriteBody {
    urerId:number,
    deviceId:number
}

interface IBasketDevice{
    id:number,
    userId:number,
    deviceId:number
}

export interface ICartDevice {
    basket_devices: IBasketDevice[],
    brand:IBrand,
    brandId:number, 
    device_infos:IDeviceInfos[],
    id:number,
    img: string,
    name:string,
    price:number,
    rating:number,
    typeId:number
}
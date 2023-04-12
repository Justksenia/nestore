import { makeAutoObservable, runInAction } from "mobx";
import { $host } from "../http";


let fetchTypes=()=>$host.get("api/type")


export default class DeviceStore{


    constructor(){
        this._types=[];
        this._brands=[];
        this._devices=[];
           
        
        this._selectedType =0
        this._selectedBrand =0
        makeAutoObservable(this);
    }
 
    setBrands(brands) {
        this._brands=brands;
    }
    setDevice(devices) {
        this._devices=devices
    }
    setSelectedType(type) {
      
        this._selectedType = type
    }
    setSelectedBrand(brand) {
 
        this._selectedBrand = brand
    }



    getTypes=async()=> {
        const data= await fetchTypes()
        runInAction(()=>this._types=data.data)
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
   
}
import { makeAutoObservable, runInAction } from "mobx";
import { $host, $hostAuth } from "../http";



let deleteType=(id)=>$hostAuth.delete("api/type/"+id)


    

export default class DeviceStore{
  

    constructor(){
        this._types=[];
        this._brands=[];
        this._devices=[];
        this._device={};
           
        
        this._selectedType =0
        this._selectedBrand =0
        makeAutoObservable(this);
    }
 

    setDevice(devices) {
        this._devices=devices
    }
    setSelectedType=async(id)=> {
       this._selectedType = id
       let brandId=this._selectedBrand!==0?this._selectedBrand:null
       const {data}=await fetchOneType(id,brandId)
       runInAction(()=>this._devices=data.rows)
    }
    setSelectedBrand=async(id)=> {
         this._selectedBrand = id
         let typeId=this._selectedType!==0?this._selectedType:null
        const {data}= await fetchOneBrand(id, typeId)
        runInAction(()=>this._devices=data.rows)

    }
    getTypes=async()=> {
        const {data}= await fetchTypes()
        runInAction(()=>this._types=data)
    }
    deleteType=async(id)=>{
        const {data}=await deleteType(id)
    }

    getBrands=async()=>{
        const {data}=await fetchBrands()
        runInAction(()=>this._brands=data)
    }
    getDevice=async(id)=>{
        const {data}=await fetchOneDevice(id)
        runInAction(()=>this._device=data)
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
    get device() {
        this.getDevice()
        return this._device
    }
   
}
import {$hostAuth } from "."


export const createType=async(type)=>{
    const {data}=await $hostAuth.post("api/type", type) 
    return data
}


// export const deleteType=async(id)=>{
//     const {data}=await $hostAuth.delete("api/type/"+id) 
//     return data
// }

export const createBrand=async(brand)=>{
    const {data}=await $hostAuth.post("api/brand", brand) 
    return data
}


export const createDevice=async(device)=>{
    const {data}=await $hostAuth.post("api/device", device)
    return data
}
import { $host, $hostAuth } from "."


export const createType=async(type)=>{
    const {data}=await $hostAuth.post("api/type", type) 
    return data
}

export const fetchType=async()=>{
    const {data}=await $host.get("api/type") 
    return data
}
export const deleteType=async(id)=>{
    const {data}=await $hostAuth.delete("api/type/"+id) 
    return data
}

export const createBrand=async(brand)=>{
    const {data}=await $hostAuth.post("api/brand", brand) 
    return data
}

export const fetchBrand=async()=>{
    const {data}=await $host.get("api/brand") 
    return data
}

export const fetchDevices=async(typeId, brandId, page=1, limit=40)=>{
        const {data}=await $host.get(`api/device`,{params:{typeId,brandId,page,limit}})
        return data
   
}

export const fetchOneDevice=async(id)=>{
    const {data}=await $host.get(`api/device/${id}`)
    return data
}

export const createDevice=async(device)=>{
    const {data}=await $hostAuth.post("api/device", device)
    return data
}
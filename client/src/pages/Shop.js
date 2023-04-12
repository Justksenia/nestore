import { BrandBar } from "../components/BrandBar"
import { TypeBar } from "../components/TypeBar"
import { DeviceList } from "../components/DeviceList"
import { observer} from "mobx-react-lite"
import{useContext, useEffect} from "react"
import {Context} from "../index"
import { deleteType, fetchType } from '../http/deviceApi';

export const Shop =observer(()=> {
  const {device}=useContext(Context)
  const {user}=useContext(Context)

  console.log(device._types)
  const deleteTypeId=async(id)=>{
    deleteType(id)
  }
  const setSelectType=(id)=>{
    device.setSelectedType(id)
  }

  useEffect(()=>{
      device.getTypes()
     
      },[])
    return (
      <>
        <div className="flex items-start">
          <TypeBar 
          types={device._types} 
          deleteTypeId={deleteTypeId} 
          setSelectType={setSelectType}
          selectedType={device.selectedType} 
          isAdmin={user.isAdmin}/>
        <div>
        <BrandBar/>
        <div className="flex flex-wrap">
          <DeviceList/>
      
        </div>
        
        </div>
         
          
        </div>
    
        </>
    )
})

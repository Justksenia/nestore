import { BrandBar } from "../components/BrandBar/index";
import { TypeBar } from "../components/TypeBar";
import { DeviceList } from "../components/DeviceList";
import { deviceApi } from "../service/deviceApi";
import React from "react"
import { useAppSelector } from "../hooks/redux";
import { RootState } from "../stores/store";


export const Shop = () => {

  const [typeId, setTypeId]=React.useState()
  const [brandId, setBrandId]=React.useState()
  const {data, isLoading, error}=deviceApi.useFetchAllDeviceQuery({limit:40, typeId, brandId});
  const {user,isAuth}=useAppSelector((state:RootState)=>state.userReducer)

  let userId=user&&user.id

  return (
    <div className="grid grid-cols-shop">
      <TypeBar setTypeId={setTypeId}/>
    
     
      <div>
      <BrandBar setBrandId={setBrandId}/>
        
        <div className="flex flex-wrap">
          {data &&<DeviceList rows={data.rows} isAuth={isAuth} userId={userId} /> }
          {isLoading && <p>Loading...</p>}
          {error && <p>Error</p>}
          
        </div>
      </div>
    </div>
  );
};

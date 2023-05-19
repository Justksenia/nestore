
import { DeviceItem } from "./DeviceItem";

import { favoriteApi } from "../service/favoriteApi";

import { IDevice, IFavorite } from "../types/DeviceTypes";

import { DeviceItemAuth } from "./DeviceItemAuth";



export const DeviceList:React.FC<any> = ({rows, isAuth, userId}) => {


   if (userId) {
    let {data:favorite}=favoriteApi.useFetchFavoriteQuery(userId)

    let [addToFavorite,{isLoading,error}]=favoriteApi.useAddToFavoriteMutation();
    return (
      <div className="grid grid-cols-item">
        {rows.map((device:IDevice) => {
        let isFavorite=false
         {favorite && favorite.forEach(element => {
          if (element.id===device.id) {
            isFavorite=true
          }
         })}
        
         return (
        <DeviceItemAuth key={device.id} isFavorite={isFavorite} device={device} addToFavorite={addToFavorite} userId={userId}/>
         )
        })
          
        }
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-item">
        {rows.map((device:IDevice) => <DeviceItem key={device.id}  device={device} isAuth={isAuth}/>)}
        
       
      </div>
    );
  }
  

};

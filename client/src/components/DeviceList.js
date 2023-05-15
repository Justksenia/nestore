import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { useContext, useEffect } from "react";
import { DeviceItem } from "./DeviceItem";
import { fetchDevices } from "../http/deviceApi";

export const DeviceList = observer(() => {
  useEffect(() => {
    (async () => {
      const response = await fetchDevices();
      await device.setDevice(response.rows);
    })();
  }, []);
  const { device } = useContext(Context);
  const {user}=useContext(Context);
 

  console.log(user._favorite.map(item=>item))

  return (
    <div className="grid grid-cols-item">
      {device.devices.map((device) => {
      let isFavorite=false
       user._favorite.forEach(element => {
        if (element.id===device.id) {
          isFavorite=true
        }
       })
       return (
      <DeviceItem key={device.id} isFavorite={isFavorite} {...device} />
       )
      })
        
      }
    </div>
  );
});

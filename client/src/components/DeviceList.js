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

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2">
      {device.devices.map((device) => (
        <DeviceItem key={device.id} {...device} />
      ))}
    </div>
  );
});

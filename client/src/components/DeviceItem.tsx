import { useState } from "react";
import { NavLink } from "react-router-dom";

import Button from "./UI/Button";
import { BlackHearth } from "./UI/SvgButton/BlackHearth";
import { PinkHearth } from "./UI/SvgButton/PinkHearth";
import { IDevice } from "../types/DeviceTypes";
import { Star } from "./UI/SvgButton/Star";

interface IDeviceItemProps {
  device: IDevice;
  isAuth: boolean;
}

export const DeviceItem: React.FC<IDeviceItemProps> = ({ device, isAuth }) => {
  const [favorite, setFavorite] = useState(false);

  const ur = process.env.REACT_APP_API_URL + device.img;
  const color = device.device_infos.filter(
    (item) => item.title.toLowerCase() === "цвет"
  );
  const memory = device.device_infos.filter(
    (item) => item.title.toLowerCase() === "память" || item.title === "HDD"
  );

  return (
    <div className="py-4 h-500 flex flex-col justify-between hover:shadow-xl">
      <div className="flex justify-end">
        <Button
          variant="normalDark"
          onClick={() => setFavorite(true)}
          disabled={favorite}
        >
          {favorite ? <PinkHearth /> : <BlackHearth />}
        </Button>
      </div>
      <NavLink to={"/device/" + device.id}>
        <div className="flex justify-evenly items-start">
          <div
            style={{ backgroundImage: `url(${ur})` }}
            className="bg-contain bg-center bg-no-repeat w-48 h-52"
          ></div>
        </div>
      </NavLink>

      <div>
        <p className="text-16 my-3 m-auto w-260 h-12 text-center">
          {device.brand.name} {device.name} {color[0]?.desc} {memory[0]?.desc}
        </p>

        <div className="flex justify-evenly items-center m-4">
          <p className="text-18">{device.price} руб.</p>
          <div className="flex justify-center items-center">
            <p>{device.rating}</p>
            <Star/>
          </div>
        </div>
        {!isAuth && (
          <NavLink to="/login">
            <Button className="m-auto" variant="primary">
              Добавить в корзину
            </Button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

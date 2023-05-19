
import { useState} from "react";
import { NavLink } from "react-router-dom";

import Button from "./UI/Button";
import { BlackHearth } from "./UI/SvgButton/BlackHearth"
import { PinkHearth } from "./UI/SvgButton/PinkHearth";
import { IDevice, IFavorite, IFavoriteBody } from "../types/DeviceTypes";

interface IDeviceItemAuthProps{
  
  isFavorite:boolean,
  device: IDevice,
  userId:number,
  addToFavorite:(arg:any)=>void
}


export const DeviceItemAuth:React.FC<IDeviceItemAuthProps> = ({isFavorite, device, userId, addToFavorite}) => {

  const [favorite, setFavorite]=useState(isFavorite)
  const arg= {
    userId:userId,
    deviceId:device.id,
  }


 let addFavorite=()=>{
    setFavorite(true)
    addToFavorite(arg)
  
}




  
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
        <Button variant="normalDark" onClick={addFavorite} disabled={favorite}>
          {favorite?<PinkHearth/>:<BlackHearth/>}
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
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#e1dd51"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.528"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M11.0489 4.92705C11.3483 4.00574 12.6517 4.00574 12.9511 4.92705L14.2451 8.90983C14.379 9.32185 14.763 9.60081 15.1962 9.60081H19.3839C20.3527 9.60081 20.7554 10.8404 19.9717 11.4098L16.5838 13.8713C16.2333 14.126 16.0866 14.5773 16.2205 14.9894L17.5146 18.9721C17.8139 19.8934 16.7595 20.6596 15.9757 20.0902L12.5878 17.6287C12.2373 17.374 11.7627 17.374 11.4122 17.6287L8.02426 20.0902C7.24054 20.6596 6.18607 19.8934 6.48542 18.9721L7.7795 14.9894C7.91338 14.5773 7.76672 14.126 7.41623 13.8713L4.02827 11.4098C3.24456 10.8404 3.64734 9.60081 4.61606 9.60081H8.8038C9.23703 9.60081 9.62099 9.32185 9.75486 8.90983L11.0489 4.92705Z"
                  stroke="#f0f42a"
                  strokeWidth="1.344"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
        <Button
        className="m-auto"
          variant="primary"
          onClick={() => console.log("klick")}
        >
          Добавить в корзину
        </Button>
      </div> 
    </div>
  );
};

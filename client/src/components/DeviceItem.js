import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../index";

export const DeviceItem = observer((props) => {
  const { id, img, brand, rating, price, name, device_infos} = props;

  const {user}=useContext(Context)
  let userId=user._user.id


  const ur = process.env.REACT_APP_API_URL + img;
  const color = device_infos.filter(
    (item) => item.title.toLowerCase() === "цвет"
  );
  const memory = device_infos.filter(
    (item) => item.title.toLowerCase() === "память" || item.title === "ОЗУ"
  );


  return (
    <div className=" my-4 py-2 hover:border-2">
      <div className="flex justify-end">
        <button>
        <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 4c-3.2 0-5 2.667-5 4 0-1.333-1.8-4-5-4S3 6.667 3 8c0 7 9 12 9 12s9-5 9-12c0-1.333-.8-4-4-4z"></path></g></svg>
     
        </button>
      </div>
      <NavLink to={"/device/" + id}>
        <div className="flex justify-evenly items-start">
          <div
            style={{ backgroundImage: `url(${ur})` }}
            className="bg-contain bg-center bg-no-repeat w-48 h-52"
          ></div>
        </div>
      </NavLink>

      <div>
        <p className="text-16 my-3 text-center">
          {brand.name} {name} {color[0]?.desc} {memory[0]?.desc}
        </p>
        <div className="flex justify-evenly items-center m-4">
          <p className="text-18">{price} руб.</p>
          <div className="flex">
            <p>{rating}</p>
            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#e1dd51"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.528"></g><g id="SVGRepo_iconCarrier"> <path d="M11.0489 4.92705C11.3483 4.00574 12.6517 4.00574 12.9511 4.92705L14.2451 8.90983C14.379 9.32185 14.763 9.60081 15.1962 9.60081H19.3839C20.3527 9.60081 20.7554 10.8404 19.9717 11.4098L16.5838 13.8713C16.2333 14.126 16.0866 14.5773 16.2205 14.9894L17.5146 18.9721C17.8139 19.8934 16.7595 20.6596 15.9757 20.0902L12.5878 17.6287C12.2373 17.374 11.7627 17.374 11.4122 17.6287L8.02426 20.0902C7.24054 20.6596 6.18607 19.8934 6.48542 18.9721L7.7795 14.9894C7.91338 14.5773 7.76672 14.126 7.41623 13.8713L4.02827 11.4098C3.24456 10.8404 3.64734 9.60081 4.61606 9.60081H8.8038C9.23703 9.60081 9.62099 9.32185 9.75486 8.90983L11.0489 4.92705Z" stroke="#f0f42a" strokeWidth="1.344" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </div>
        </div>
        <button className="bg-pink text-white py-2 px-6 block m-auto rounded-md" onClick={()=>user.setBasket(userId, id)}> 
          Добавить в корзину
        </button>
      </div>
    </div>
  );
}
)

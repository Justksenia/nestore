import { Image } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchOneDevice } from "../http/deviceApi";

export const DevicePage = () => {
  const [device, setDevice] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <>
    <Link to="/">
    <button className="mx-20 my-10">
      <svg className="hover:bg-light"width="48px" height="48px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#e30475" stroke="#e30475"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="F-Chevron"> <polyline fill="none" id="Left" points="15.5 5 8.5 12 15.5 19" stroke="#e30475" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"></polyline> </g> </g> </g></svg>
      </button>
    </Link>
     
      {device && (
        <div className="m-auto">
          <div className="flex items-center justify-evenly">
            <div>
              <p className="text-center text-22">Характеристики</p>
              <div className="mx-auto w-80">
                {device.device_infos
                  .filter((item) => item.title.toLowerCase() !== "color")
                  .map((item) => (
                    <div className="py-3 text-center">
                      <span className="border-b-2" key={item.id}>
                        {item.title} - {item.desc}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <img
                width="200"
                height="300"
                src={process.env.REACT_APP_API_URL + device.img}
              />
            </div>

            <div>
              <h2 className="text-22 my-3">
                {device.brand.name} {device.name}
              </h2>
              <p>Рейтинг: {device.rating}</p>
              <p className="text-18">Цена: {device.price} руб.</p>
              <div>
                <button className="block bg-black text-white py-2 px-6 m-auto rounded-md my-3 hover:bg-slate-300">
                  Добавить в избранное
                </button>
                <button className="block bg-pink text-white py-2 px-8 m-auto rounded-md">
                  Добавить в корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

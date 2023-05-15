import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchOneDevice } from "../http/deviceApi";
import Button from "../components/UI/Button";
import { BackButton } from "../components/UI/BackButton";

export const DevicePage = () => {
  const [device, setDevice] = useState(null);
  const { id } = useParams();


  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <div className="w-90vw m-auto">
    <Link to="/">
    <button className="mx-20 my-10">
      <BackButton/>
      </button>
    </Link>
     
      {device && (
        <div>
          <div className="flex items-start justify-around w-80vw">
            <div>
              <p className="text-center text-22">Характеристики:</p>
              <div className="mx-auto w-80">
                {device.device_infos
                  .filter((item) => item.title.toLowerCase() !== "color")
                  .map((item) => (
                    <div className="py-3 text-center" key={item.id}>
                      <span className="border-b-2" >
                        {item.title} - {item.desc}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <div className="w-578 h-411 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL}${device.img})` }}> 
         
       

              </div>
      
            </div>

            <div>
              <h2 className="text-22 my-3">
                {device.brand.name} {device.name}
              </h2>
              <p>Рейтинг: {device.rating}</p>
              <p className="text-18">Цена: {device.price} руб.</p>
              <div className="w-60">
                {/* <button className="block bg-black text-white py-2 px-6 m-auto rounded-md my-3 hover:bg-slate-300">
                  Добавить в избранное
                </button>
                <button className="block bg-pink text-white py-2 px-8 m-auto rounded-md">
                  Добавить в корзину
                </button> */}
                <Button variant="primary" className="w-100% my-3">Добавить в корзину</Button>
                <Button variant="black" className="w-100%">Добавить в избранное</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

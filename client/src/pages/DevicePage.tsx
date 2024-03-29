import { useParams, Link, NavLink } from "react-router-dom";
import { cartApi } from "../service/cartApi";
import { deviceApi } from "../service/deviceApi";
import Button from "../components/UI/Button";
import { BackButton } from "../components/UI/SvgButton/Back";
import { useAppSelector } from "../hooks/redux";
import { RootState } from "../stores/store";
import { favoriteApi } from "../service/favoriteApi";

export const DevicePage = () => {
  const { id } = useParams();

  const {
    data: device,
    isLoading,
    error,
  } = deviceApi.useFetchOneDeviceQuery(Number(id));

  let [addOneCartDevice,{}]=cartApi.useAddOneCartDeviceMutation();
  const {user}=useAppSelector((state:RootState)=>state.userReducer)

  let userId=user&&user.id
  if (userId) {
    let {data}=favoriteApi.useFetchFavoriteQuery(userId)
    console.log(data)
  }


  return (
    
    <div className="w-90vw m-auto">
      <Link to="/" className="mx-20 my-10">
     
          <BackButton />
      
      </Link>
      {isLoading && <p>Loading</p>}
      {error && <p>Error</p>}
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
                      <span className="border-b-2">
                        {item.title} - {item.desc}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <div
                className="w-578 h-411 bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_API_URL}${device.img})`,
                }}
              ></div>
            </div>

            <div>
              <h2 className="text-22 my-3">
                {device.brand.name} {device.name}
              </h2>
              <p>Рейтинг: {device.rating}</p>
              <p className="text-18">Цена: {device.price} руб.</p>
              <div className="w-60">
                {userId ? 
                <Button variant="primary" className="w-100% my-3">
                  Добавить в корзину
                </Button> 
                : 
                <NavLink to="/login">
                  <Button variant="primary" className="w-100% my-3">
                  Добавить в корзину
                </Button> 
                </NavLink>
                }
                {userId ? 
                  <Button variant="black" className="w-100%">
                  Добавить в избранное
                </Button> :
                <NavLink to="/login">
                    <Button variant="black" className="w-100%">
                  Добавить в избранное
                </Button>
                </NavLink>
              }
              
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

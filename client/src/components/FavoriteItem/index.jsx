import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import { PinkHearth } from "../UI/PinkHearth";


export const FavoriteItem = (props) => {
console.log(props)
  const {img, brand, name, device_infos, price, id}=props
  const color = device_infos.filter(
    (item) => item.title.toLowerCase() === "цвет"
  );
  console.log(color)
  const memory = device_infos.filter(
    (item) => item.title.toLowerCase() === "память" || item.title === "HDD"
  );
  


  const favoriteImg=process.env.REACT_APP_API_URL + img;
  return (
    <div className="py-4 h-500 flex flex-col justify-start hover:shadow-xl mr-3">
      <div className="flex justify-end">
        <Button>
          <PinkHearth/>
        </Button>
      </div>
      <NavLink to={"/device/" + id}>
        <div className="flex justify-evenly items-start">
          <div
            style={{ backgroundImage: `url(${favoriteImg})` }}
            className="bg-contain bg-center bg-no-repeat w-48 h-52"
          ></div>
        </div>
      </NavLink>

      <div>
        <p className="text-16 my-3 m-auto w-260 h-12 text-center">
          {brand.name} {name} {color[0].desc}  {memory[0].desc}
        </p>
 
        <div className="flex justify-evenly items-center m-4">
          <p className="text-18">{price} руб.</p>
      
        </div>
        <Button
        className="m-auto"
          variant="primary"
        
        >
          Добавить в корзину
        </Button>
      </div>
    </div>
  );
};

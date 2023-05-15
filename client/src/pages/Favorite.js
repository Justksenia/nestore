import { observer } from "mobx-react-lite"
import { Context } from "../index";
import { useContext, useEffect } from "react";
import { FavoriteItem } from "../components/FavoriteItem";

export const Favorite =observer(() => {
    const { user } = useContext(Context);
    let userId = user._user.id;
  
    useEffect(()=>{
        user.getFavorite(userId)
    },[])

    // const color = device_infos.filter(
    //     (item) => item.title.toLowerCase() === "цвет"
    //   );
    //   const memory = device_infos.filter(
    //     (item) => item.title.toLowerCase() === "память" || item.title === "HDD"
    //   );
    return (
        <div>
           <h3 className="text-22 py-10 border-b-2">Избранное</h3>
           {user._favorite.length==0 
           ? <p>Добавьте что-нибудь в избранное</p>
            :  
             <div className="flex flex-wrap w-1100 m-auto">
                {user._favorite.map(item=><FavoriteItem key={item.favorite_devices[0].id} {...item}/>)}
                
        
               
               

            </div>        
        }
        </div>
    )
})
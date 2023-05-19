
import { FavoriteItem } from "../components/FavoriteItem";
import { RootState } from "../stores/store";
import { useAppSelector } from "../hooks/redux";
import { deviceApi } from "../service/deviceApi";
import { favoriteApi } from "../service/favoriteApi";

export  const Favorite=():JSX.Element => {
    let user=useAppSelector((state:RootState)=>state.userReducer.user)
    
    
   if (user) {
    let {data, isLoading, error}=favoriteApi.useFetchFavoriteQuery(user.id)
    {isLoading&& <p>Loading...</p>}
    {error&& <p>Error</p>}
    return (
        <div>
           <h3 className="text-22 py-10 border-b-2">Избранное</h3>
           { data &&
           data.length==0 ?<p>Добавьте что-нибудь в избранное</p> 
           : <div className="flex flex-wrap w-1100 m-auto">
           {data && data.map(item=><FavoriteItem key={item.favorite_devices[0].id} {...item}/>)}
           </div> 
           }
        
        </div>
    )
   } else {
    return (
        <p>Что то пошло не так</p>
    )
   }


}
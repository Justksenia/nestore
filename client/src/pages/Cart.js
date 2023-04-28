import { observer } from "mobx-react-lite"
import {Context} from "../index"
import { useContext, useEffect } from "react";
import { CartItem } from "../components/CartItem";

export const Cart =observer(()=> {
    const { user } = useContext(Context);
    useEffect(()=>{
        user.getBasket(user._user.id)
    },[])
console.log(user._basket)

const input="https://re-store.ru/local/templates/re-store/img/checkbox/checkbox-on.svg"

    return (
        <div>
          <h3 className="text-22">Корзина</h3>
          {user.basket.length==0 
          ? <p>Корзина пуста</p>
          : 
          user._basket.map(item=> <CartItem key={item.id} {...item}/>)}
          
        </div>
    )
})
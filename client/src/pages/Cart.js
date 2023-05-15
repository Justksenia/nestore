import { observer } from "mobx-react-lite"
import {Context} from "../index"
import { useContext, useEffect } from "react";
import { CartItem } from "../components/CartItem";

export const Cart =observer(()=> {
    const { user } = useContext(Context);
    let userId = user._user.id;
    useEffect(()=>{
        user.getBasket(userId)
    },[])


const input="https://re-store.ru/local/templates/re-store/img/checkbox/checkbox-on.svg"

    return (
        <div>
          <h3 className="text-22 py-10">Корзина</h3>
          {user._basket.length==0 
          ? <p>Корзина пуста</p>
          : 
          <section className="flex flex-col justify-between w-1100 m-auto">
          <header className="flex justify-evenly pb-3">
            
              <p className="pl-64">Наименование товара</p>
              <p>Цена</p>
              <p>Количество</p>
              <p>Стоимость</p>
          </header>
          {user._basket.map(item=> <CartItem key={item.id} {...item}/>)}
          </section>}
          
        </div>
    )
})
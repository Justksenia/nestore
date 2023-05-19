
import { useContext, useEffect } from "react";
import { CartItem } from "../components/CartItem";
import { cartApi } from "../service/cartApi";

export const Cart = ()=> {
   const{data,isLoading,error}=cartApi.useFetchCartQuery(1)
   return (
    <>
     {data &&
        <div>
              <h3 className="text-22 py-10">Корзина</h3>
              {data.length==0 
              ? <p>Корзина пуста</p>
              : 
              <section className="flex flex-col justify-between w-1100 m-auto">
              <header className="flex justify-evenly pb-3">
                
                  <p className="pl-64">Наименование товара</p>
                  <p>Цена</p>
                  <p>Количество</p>
                  <p>Стоимость</p>
              </header>
              {data.map(item=> <CartItem key={item.id} {...item}/>)}
              </section>}
              
            </div>
    }
    {isLoading&&<p>Loading...</p>}
    {error && <p>Error</p>}
    </>
   
   )



  
}
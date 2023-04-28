import React from "react"

export const CartItem=(props)=>{
    const {img, brand, name, device_infos, price, basket_devices}=props
   let totalPrice=price*basket_devices.length
    return (
        <section className="flex flex-col justify-between w-1100 m-auto">
            <header className="flex justify-evenly">
              
                <p className="pl-64">Наименование товара</p>
                <p>Цена</p>
                <p>Количество</p>
                <p>Стоимость</p>
            </header>
            <article className="flex justify-evenly py-5 border-t-2 border-light">
                <div  className>
                    <img src={process.env.REACT_APP_API_URL+img} alt="img" width="129" height="170"/>
                </div>
                <div>
                    <p>{brand.name} {name}</p>
                    <p>{device_infos[0]?.title} {device_infos[0]?.desc}</p>
                    <p>Сервисные программы: </p>
                    <input type="checkbox" name="check"/>
                    <label htmlFor="check">Программа Айфон</label>
                </div>
                <div>{price} руб</div>
                <div className="flex">
                    <div onClick={()=>console.log(basket_devices[0].id)}>
                        -
                    </div>
                    <div onClick={()=>console.log("hi")}>
                        {basket_devices.length}
                    </div>
                    <div>
                        +
                    </div>
                </div>
                <div>{totalPrice} руб</div>
            </article>
          </section>
    )
}
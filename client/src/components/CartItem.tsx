
export const CartItem=(props:any)=>{
    const {img, brand, name, device_infos, price, basket_devices}=props
   let totalPrice=price*basket_devices.length
   console.log(basket_devices)
    return (
   
            <article className="flex justify-evenly py-5 border-t-2 border-light">
                <div>
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
                    <div className="mx-4">
                        {basket_devices.length}
                    </div>
                    <div>
                        +
                    </div>
                </div>
                <div>{totalPrice} руб</div>
            </article>
      
    )
}
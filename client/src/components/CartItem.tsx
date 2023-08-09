import { cartApi } from "../service/cartApi"
import { ICartDevice } from "../types/DeviceTypes"

export const CartItem:React.FC<ICartDevice>=({id:deviceId,img, brand, name, device_infos, price, basket_devices})=>{

    let totalPrice=price*basket_devices.length
    let [ deleteCartDevice,{}]=cartApi.useDeleteCartDeviceMutation();
    let [addOneCartDevice,{}]=cartApi.useAddOneCartDeviceMutation();
    const userId=basket_devices[0].userId
    const id=basket_devices[0].id

    return (
   
            <article className="flex justify-between py-5 border-t-2 border-light">
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
                    <div onClick={()=>deleteCartDevice({userId,id})}>
                        -
                    </div>
                    <div className="mx-4">
                        {basket_devices.length}
                    </div>
                    <div onClick={()=>addOneCartDevice({deviceId,userId})}>

                        +
                    </div>
                </div>
                <div></div>
                <div>{totalPrice} руб</div>
                <div>X</div>
            </article>
      
    )
}
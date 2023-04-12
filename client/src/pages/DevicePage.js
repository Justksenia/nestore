import { Image } from "react-bootstrap"
import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import { fetchOneDevice } from "../http/deviceApi"

export const DevicePage =()=> {
    const [device, setDevice]=useState(null)
    const {id}=useParams()
    useEffect(()=>{
        fetchOneDevice(id).then(data=>setDevice(data))
    },[])
   
    return (
        <>
        {device && 
        <div style={{display:"flex"}}>
            <div>
        
            <h2>{device.brand.name} {device.name}</h2>
            <img width="300" height="400" src={process.env.REACT_APP_API_URL+device.img}/>
            </div>
           <div>
            <p>описание товара, количество, бренд</p>
            <p>{device.rating}</p>
            <p>{device.price} руб.</p> <button>Add Hearth</button> <button>Add cart</button>

            <div>
            <p>Информация о товаре:</p>
            {device.device_infos.filter(item=>item.title.toLowerCase()!=="color").map(item=>(
                <span key={item.id}>{item.title} - {item.desc}</span>
            ))}

            </div>
            </div> 

        </div>
        }
        </>
    )
}
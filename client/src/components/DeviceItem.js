import { Col } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { NavLink } from "react-router-dom";

export const DeviceItem=(props)=>{
  const {id, img, brand, rating, price, name, device_infos}=props

  const ur=process.env.REACT_APP_API_URL+img;
  const color=device_infos.filter(item=>item.title.toLowerCase()==="цвет")
  const memory=device_infos.filter(item=>item.title.toLowerCase()==="память" || item.title==="ОЗУ") 

    return(

      <div className="p-5">
        <NavLink to={"/device/"+id}>
          <div className="flex justify-between items-start">
            <div style={{backgroundImage: `url(${ur})`}} className="bg-contain bg-center bg-no-repeat w-48 h-52"></div>
  
          <button><img src="hearth.svg" alt="hearth" width="30px" heigth="30px"/></button>
          </div>
        
      </NavLink>

      <div>
        <p className="text-16 my-3 text-center">{brand.name} {name} {color[0]?.desc} {memory[0]?.desc}</p>
        <Card.Text>
          {price} руб.
        </Card.Text>
        <Card.Text>
          {rating} <img src="star.svg" alt="star" width="30px" height="30px"/>
        </Card.Text>
        <Button variant="primary">Добавить в корзину</Button> 
 
      </div>
    </div>
   
  

 


  
      
    )
} 
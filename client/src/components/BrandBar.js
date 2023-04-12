import { observer } from 'mobx-react-lite';
import {Context} from "../index";
import { useContext, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { fetchBrand } from '../http/deviceApi';

export const BrandBar=observer(()=>{
  const {device}=useContext(Context)
  useEffect(()=>{
    (async()=>{
      const response=await fetchBrand()
      await device.setBrands(response)
    })()
  },[])
  return(
    <ListGroup horizontal style={{cursor:"pointer"}} className="p-5">
      {device.brands.map(type=>
          <ListGroup.Item 
          key={type.id} 
          onClick={()=>device.setSelectedBrand(type.id)}
          active={type.id===device.selectedBrand}>{type.name}</ListGroup.Item>
        )}
  
  </ListGroup>
   
  )
})
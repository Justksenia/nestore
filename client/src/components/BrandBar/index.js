import React from "react"

import { deviceApi } from "../../service/deviceApi"
import style from "./BrandBar.module.css"
// interface IBrandBarProps {
//   setBrandId:(arg:number)=>void
// }

export const BrandBar=({setBrandId})=>{

  const {data:brands, isLoading, error}=deviceApi.useFetchBrandsQuery(null);
  const [selectBrand, setSelectedBrand]=React.useState(0)

  const selectedBrand=(id)=>{
    setSelectedBrand(id)
    setBrandId(id)
  }

  return(
    <ul className={style.selectedBrand}>
      {brands && brands.map(type=>
      <li className={type.id === selectBrand ? style.active:null}
   
          key={type.id} 
          onClick={()=>selectedBrand(type.id)}
          active={type.id===selectBrand?true:undefined}>{type.name}</li>
        )}
  
  </ul>
   
  )
}
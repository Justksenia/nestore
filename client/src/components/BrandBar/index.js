

import style from "./BrandBar.module.css"
export const BrandBar=({brands,setSelectedBrand, selectBrand})=>{


  return(
    <ul className={style.selectedBrand}>
      {brands.map(type=>
      <li className={type.id === selectBrand ? style.active:undefined}
   
          key={type.id} 
          onClick={()=>setSelectedBrand(type.id)}
          active={type.id===selectBrand}>{type.name}</li>
        )}
  
  </ul>
   
  )
}
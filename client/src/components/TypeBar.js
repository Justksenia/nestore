
export const TypeBar=({types, isAdmin, deleteTypeId, setSelectType, selectedType})=>{
const rootClass="typeList"
  return(
    <div className="w-44 cursor-pointer pt-8">
      <ul >
      {types && types.map(type=>
    
      <li className={type.id!==selectedType?rootClass:rootClass+" .active"}
          key={type.id} 
          onClick={()=>setSelectType(type.id)}
        >{type.name}
           {isAdmin===true&& <button onClick={()=>deleteTypeId((type.id))}>X</button>}
           
           </li>
      
    
          
        )}
  
  </ul>

    </div>
   
   
  )
}
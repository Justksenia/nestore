import { deviceApi } from "../../service/deviceApi";
import Button from "../UI/Button";
import style from "./TypeBar.module.css";
import React from "react";

export const TypeBar = ({setTypeId}) => {
  const isAdmin=false
  let [selectType,setSelectType]=React.useState(0)
  const selectedType=(id)=>{
    setSelectType(id)
    setTypeId(id)
  }

  const {data:types, isLoading, error} = deviceApi.useFetchTypesQuery()
  return (
    <div className={style.container}>
      <ul className={style.typeList}>
        {types &&
          types.map((type) => (
            <div className="flex justify-between border-b-2" key={type.id}>
             <li
              className={type.id === selectType ? style.active:null}
              key={type.id}
              onClick={() => selectedType(type.id)}
            >
              {type.name}
              
            </li>
            {isAdmin === true && (
              <Button onClick={() => console.log(type.id)} variant="normalDark" >x</Button>
            )}
            </div>
           
          ))}
      </ul>
    </div>
  );
};

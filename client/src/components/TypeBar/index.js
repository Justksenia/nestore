import Button from "../UI/Button";
import style from "./TypeBar.module.css";

export const TypeBar = ({
  types,
  isAdmin,
  deleteTypeId,
  setSelectType,
  selectedType,
}) => {
  return (
    <div className={style.container}>
      <ul className={style.typeList}>
        {types &&
          types.map((type) => (
            <div className="flex justify-between border-b-2" key={type.id}>
             <li
              className={type.id === selectedType ? style.active:null}
              key={type.id}
              onClick={() => setSelectType(type.id)}
            >
              {type.name}
              
            </li>
            {isAdmin === true && (
              <Button onClick={() => deleteTypeId(type.id)} variant="normalDark" >x</Button>
            )}
            </div>
           
          ))}
      </ul>
    </div>
  );
};

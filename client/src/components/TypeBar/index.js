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
            <li
              className={type.id === selectedType ? style.active:null}
              key={type.id}
              onClick={() => setSelectType(type.id)}
            >
              {type.name}
              {isAdmin === true && (
                <button onClick={() => deleteTypeId(type.id)}>x</button>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

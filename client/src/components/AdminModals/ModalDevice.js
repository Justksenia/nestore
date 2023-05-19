import { ChangeEvent, useContext, useState} from "react";


import { createDevice } from "../../http/deviceApi";
import { observer } from "mobx-react-lite";
import DropDown from "../UI/DropDown";
import Input from "../UI/Input";
import Button from "../UI/Button";


// interface IModalDeviceProps {
//   onHide:()=>void
// }
// interface IModalDeviceInfo {
//   key:string|number
//   value:string|number
//   number:number

// }


export const ModalDevice = observer(({ onHide }) => {

  const [info, setInfo] = useState([]);

  const [type, setType] = useState(null);
  const [brand, setBrand] = useState(null);
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  const addInfo = (e) => {
    e.preventDefault();
    setInfo([...info, { title: "", desc: "", key: Date.now() }]);
  };

  const selectFile = (e) => {
    if(e.target.files) {
      setFile(e.target.files[0]);
    }
   
  };
  const changeInfo= (key, value, number) => {
    setInfo(info.map((i) => (i.key === number ? { ...i, [key]: value } : i)));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", String(price));
    formData.append("img", file);
    formData.append("typeId", type);
    formData.append("brandId", brand);
    formData.append("info", JSON.stringify(info));
    createDevice(formData);
  };

  return (
    <div className="w-96">
      <h4 className="text-22 border-b-2 py-4">Добавить устройство</h4>
      <div className="flex flex-col py-5">
        <form className="flex flex-col">
          {/* <DropDown options={device._types} value={type} setValue={setType} />
          <DropDown
            options={device._brands}
            setValue={setBrand}
            value={brand}
          /> */}
          <Input
            type="text"
            placeholder="Введите название"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Укажите стоимость"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input type="file" onChange={selectFile} />
          <Button variant="primary" onClick={addInfo}>
            Добавить новое свойство
          </Button>
          <div className="overflow-y-auto max-h-60">
            {info.map((item) => (
              <div key={item.key} className="flex ">
                <Input
                  placeholder={"Введите название"}
                  value={item.title}
                  onChange={(e) =>
                    changeInfo("title", e.target.value, item.key)
                  }
                />
                <Input
                  placeholder={"Введите описание"}
                  className="mx-2"
                  value={item.desc}
                  onChange={(e) => changeInfo("desc", e.target.value, item.key)}
                />
              </div>
            ))}
          </div>

          <div className="flex py-3">
            <Button variant="black" onClick={onHide}>
              Отмена
            </Button>
            <Button variant="primary" onClick={(e) => handlesubmit(e)}>
              Сохранить
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
});

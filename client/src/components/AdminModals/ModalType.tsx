import Button from "../UI/Button";
import { useState } from "react";
import { createType } from "../../http/deviceApi";
import Input from "../UI/Input";

interface IModalTypeProps {
  onHide: () => void;
}
export const ModalType: React.FC<IModalTypeProps> = ({ onHide }) => {
  const [value, setValue] = useState("");

  const addType = () => {
    createType({ name: value });
    onHide();
    setValue("");
  };
  return (
    <div className="w-96">
      <h4 className="text-22 border-b-2 py-4">Добавить тип</h4>
      <div className="flex flex-col py-5">
        <Input
          type="text"
          placeholder="Укажите тип"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex pt-5 m-1">
          <Button variant="black" onClick={onHide}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={addType}>
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
};

import Button from "../UI/Button";
import Input from "../UI/Input";
import { useState } from "react";
import { createBrand } from "../../http/deviceApi";

interface IModalBrandsProps {
  onHide: () => void;
}

export const ModalBrands: React.FC<IModalBrandsProps> = ({ onHide }) => {
  const [value, setValue] = useState("");
  const addBrand = () => {
    createBrand({ name: value });
    onHide();
    setValue("");
  };

  return (
    <div className="w-96">
      <h4 className="text-22 border-b-2 py-4">Добавить бренд</h4>
      <div className="flex flex-col py-5">
        <Input
          type="text"
          placeholder="Укажите бренд"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex pt-5 m-1">
          <Button variant="black" onClick={onHide}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={addBrand}>
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
};

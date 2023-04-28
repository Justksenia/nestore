import { BrandBar } from "../components/BrandBar";
import { TypeBar } from "../components/TypeBar";
import { DeviceList } from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "../index";


export const Shop = observer(() => {
  const { device } = useContext(Context);
  const { user } = useContext(Context);


  const deleteTypeId =  (id) => {
    device.deleteType(id);
    device.getTypes();

  };
  const setSelectType = (id) => {
    device.setSelectedType(id);
  };
  const setSelectedBrand=(id)=>{
    device.setSelectedBrand(id)
  }

  useEffect(() => {
    device.getTypes();
    device.getBrands();
    user.getBasket(user._user.id)
  }, []);
  return (
    <div className="flex items-start justify-evenly w-1100">
      <TypeBar
        types={device._types}
        deleteTypeId={deleteTypeId}
        setSelectType={setSelectType}
        selectedType={device.selectedType}
        isAdmin={user.isAdmin}
      />
      <div>
        <BrandBar 
          brands={device._brands}
          setSelectedBrand={setSelectedBrand}
          selectBrand={device.selectedBrand}
        />
        <div className="flex flex-wrap">
          <DeviceList />
        </div>
      </div>
    </div>
  );
});

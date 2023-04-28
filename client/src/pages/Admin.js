import { useState } from 'react';

import { ModalBrands } from '../components/modals/ModalBrand';
import { ModalType } from '../components/modals/ModalType';
import { ModalDevice } from '../components/modals/ModalDevice';

export const Admin =()=> {
    const [typeVisible, setTypeVisible]=useState(false)
    const [brandVisible, setBrandVisible]=useState(false)
    const [deviceVisible, setDeviceVisible]=useState(false)
   
    return (
      <>
      <div style={{display:"flex", justifyContent:"space-around", marginTop:"25vh"}}>
       <div className="d-grid gap-2" style={{width:500}}>
      <button variant="outline-dark" size="lg" onClick={()=>setBrandVisible(true)}>
        Добавить бренд
      </button>
      <button variant="outline-dark" size="lg" onClick={()=>setDeviceVisible(true)}>
        Добавить устройство
      </button>
      <button variant="outline-dark" size="lg" onClick={()=>setTypeVisible(true)}>
        Добавить тип
      </button>
    </div>
    
    </div>
    <ModalType show={typeVisible} onHide={()=>setTypeVisible(false)}/>
    <ModalBrands show={brandVisible} onHide={()=>setBrandVisible(false)}/>
    <ModalDevice show={deviceVisible} onHide={()=>setDeviceVisible(false)}/>
    </>
    )
}
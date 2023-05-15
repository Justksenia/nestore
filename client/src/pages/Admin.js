import { useState } from 'react';

import { ModalBrands } from '../components/AdminModals/ModalBrand';
import { ModalType } from '../components/AdminModals/ModalType';
import { ModalDevice } from '../components/AdminModals/ModalDevice';

import Modal from "../components/UI/Modal"
import Button from '../components/UI/Button';

export const Admin =()=> {
    const [typeVisible, setTypeVisible]=useState(false)
    const [brandVisible, setBrandVisible]=useState(false)
    const [deviceVisible, setDeviceVisible]=useState(false)
   
    return (
      <>
      <div style={{display:"flex", justifyContent:"space-around", marginTop:"25vh"}}>
       <div className="grid gap-2 w-260">
      <Button variant="primary" onClick={()=>setBrandVisible(true)}>
        Добавить бренд
      </Button>
      <Button variant="primary" onClick={()=>setDeviceVisible(true)}>
          Добавить устройство
      </Button>
      <Button variant="primary" onClick={()=>setTypeVisible(true)}>
        Добавить тип
      </Button>
      
    </div>
    
    </div>

    <Modal visible={brandVisible} onHide={()=>setBrandVisible(false)}>
      <ModalBrands onHide={()=>setBrandVisible(false)}/>
    </Modal>

    <Modal visible={typeVisible} onHide={()=>setTypeVisible(false)}> 
      <ModalType onHide={()=>setTypeVisible(false)}/>
    </Modal>
   
      <Modal visible={deviceVisible} onHide={()=>setDeviceVisible(false)}>
      <ModalDevice show={deviceVisible} onHide={()=>setDeviceVisible(false)}/>
      </Modal>
    
    </>
    )
}
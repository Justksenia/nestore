import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useContext, useState} from "react"
import {Context} from "../../index"
import { Form, Dropdown, Container} from 'react-bootstrap';
import { createDevice } from '../../http/deviceApi';


export const ModalDevice=({show, onHide})=> {
  
    const {device}=useContext(Context)
    const [info, setInfo]=useState([])

    const [type,setType]=useState({})
    const [brand,setBrand]=useState({})
    const [price,setPrice]=useState("")
    const [name,setName]=useState("")
    const [file,setFile]=useState(null)

    const addInfo=()=>{
        setInfo([...info, {title:"", desc:"", key:Date.now()}])
    }

 
    const selectFile=(e)=>{
      setFile(e.target.files[0])
    }
    const changeInfo=(key,value,number)=>{
      setInfo(info.map(i=>i.key===number?{...i,[key]:value}:i))
    }

    const addDevice=()=>{
      const formData=new FormData();
      formData.append("name", name)
      formData.append("price", String(price))
      formData.append("img", file)
      formData.append("typeId", String(type.id))
      formData.append("brandId", String(brand.id))
      formData.append("info", JSON.stringify(info))

      createDevice(formData)
    }

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Добавить устройство</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Dropdown>
            <Dropdown.Toggle className="mb-4"> {type.name||"Выберите тип"} </Dropdown.Toggle>
            <Dropdown.Menu>
                {device.types.map(type=>
                    <Dropdown.Item key={type.id} onClick={()=>setType(type)}>{type.name}</Dropdown.Item>
                )}
            </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
            <Dropdown.Toggle className="mb-4"> {brand.name||"Выберите брэнд"} </Dropdown.Toggle>
            <Dropdown.Menu>
                {device.brands.map(brand=>
                    <Dropdown.Item key={brand.id} onClick={()=>setBrand(brand)}>{brand.name}</Dropdown.Item>
                )}
            </Dropdown.Menu>
            </Dropdown>
            <Form.Control 
            placeholder={"Введите название устройства"} 
            className="mb-2"
            value={name}
            onChange={(e)=>setName(e.target.value)}/>

            <Form.Control 
            placeholder={"Введите стоимость устройства"} 
            type="number" 
            className="mb-4" 
            value={price} 
            onChange={(e)=>setPrice(e.target.value)}/>

            <Form.Control type="file" className="mb-4" onChange={selectFile}/>

            <Button variant="outline-dark" onClick={addInfo} className="mt-4"> 
                Добавить новое свойство
            </Button>
            {info.map(item=>
                <Container key={item.key}>
                    <Form.Control 
                    placeholder={"Введите название"} 
                    className="mb-2" value={item.title} onChange={(e)=>changeInfo("title",e.target.value, item.key)}
                    />
                    <Form.Control 
                    placeholder={"Введите описание"} 
                    className="mb-4" value={item.desc} onChange={(e)=>changeInfo("desc",e.target.value, item.key)}
                    />
                </Container>)}
           


   
 
            </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-dark" onClick={onHide}>Close</Button>
          <Button variant="outline-success" onClick={addDevice}>Сохранить</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
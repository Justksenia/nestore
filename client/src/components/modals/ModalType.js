import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useContext, useState} from "react"
import {Context} from "../../index"
import { Form } from 'react-bootstrap';
import { createType } from '../../http/deviceApi';

export const ModalType=({show, onHide})=> {
    
   
    const [value, setValue]=useState("");

    const addType=()=>{
      createType({name:value})
      onHide()
      setValue("")
    }
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Добавить тип</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control placeholder={"Укажите тип"} value={value} onChange={(e)=>setValue(e.target.value)}/>
            </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-dark" onClick={onHide}>Close</Button>
          <Button variant="outline-success" onClick={addType}>Сохранить</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
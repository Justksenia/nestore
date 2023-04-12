import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from "react"
import { Form } from 'react-bootstrap';

import { createBrand } from '../../http/deviceApi';

export const ModalBrands=({show, onHide})=> {
    const[value,setValue]=useState("");
    const addBrand=()=>{
      createBrand({name:value});
      onHide();
      setValue("");
    }
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Добавить бренд</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control placeholder={"Укажите бренд"} value={value} onChange={(e)=>setValue(e.target.value)}/>
            </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-dark" onClick={onHide}>Close</Button>
          <Button variant="outline-success" onClick={addBrand}>Сохранить</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
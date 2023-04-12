import React, {useContext, useState} from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import axios from "axios"

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { registration, login } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "../index";



export const Auth = observer(() => {

  const {user}=useContext(Context)
  
  const location = useLocation();
  const navigate=useNavigate();
  let isLocation=location.pathname === "/login";


  const[email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  const click=async()=>{

    try {
      let data;
      if(isLocation){
        data=await login(email,password)
        
      }
      else {
       data=await registration(email,password)
      }
      user.setUser(data);
      user.setIsAuth(true);
      navigate("/")
 
    } catch (e) {
      alert (e.response.data.message)
    }

  }

  

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Form>
        <h2>{isLocation ? "Авторизация" : "Регистрация"}</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="введите email" value={email} onChange={e=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="введите пароль" value={password} onChange={e=>setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Text className="text-muted">
            {isLocation ? (
              <NavLink to="/registration" style={{ color: "black" }}>
                Создать аккаунт
              </NavLink>
            ) : (
              <NavLink to="/login" style={{ color: "black" }}>
                У меня есть аккаунт
              </NavLink>
            )}
          </Form.Text>
        </Form.Group>
       
      </Form>
      <Button variant="dark" type="submit" style={{ width: "40%" }} onClick={click}>
          {isLocation ? "Войти" : "Создать"}
        </Button>
    </Container>
  );
}
)
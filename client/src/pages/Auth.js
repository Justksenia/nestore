import { useContext, useState } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";

import { registration, login } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

export const Auth = observer(() => {
  const { user } = useContext(Context);

  const location = useLocation();
  const navigate = useNavigate();
  let isLocation = location.pathname === "/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (isLocation) {
        data = await login(email, password);
      
      } else {
        data = await registration(email, password);
      }
      user.setUser(data);
      user.setIsAuth(true);
      navigate("/");
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center mt-28">
      <form className="my-3 border-2 p-12" onSubmit={(e) => handlesubmit(e)}>
        <h2 className="text-22 mb-3">
          {isLocation ? "Авторизация" : "Регистрация"}
        </h2>
        <div className="mb-3">
          <input
            className="border-grey border-2 p-1 rounded-md"
            type="email"
            placeholder="введите email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            className="border-grey border-2 p-1 rounded-md"
            placeholder="введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="text-center my-3">
          {isLocation ? (
            <NavLink to="/registration" className="hover:text-pink">
              Создать аккаунт
            </NavLink>
          ) : (
            <NavLink to="/login" className="hover:text-pink">
              У меня есть аккаунт
            </NavLink>
          )}
        </p>
        <button className="block bg-pink text-white py-2 px-8 m-auto rounded-md">
          {isLocation ? "Войти" : "Создать"}
        </button>
      </form>
    </div>
  );
});

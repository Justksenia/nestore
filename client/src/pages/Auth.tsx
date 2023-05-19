import { useState } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";


import { authApi } from "../service/authApi";

export const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let isLocation = location.pathname === "/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { isLoading, error }] = authApi.useLoginUserMutation();

  if (error) {
    alert(error);
  }

  const handlesubmit = async (e:any) => {
    e.preventDefault();

    try {
      const auth = { email, password };
      await loginUser(auth);
      navigate("/");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="flex justify-center items-center mt-28">
      <form className="my-3 border-2 p-12" onSubmit={(e) => handlesubmit(e)}>
        <h2 className="text-22 mb-3">
          {isLocation ? "Авторизация" : "Регистрация"}
        </h2>
        <div>
          <Input
            type="email"
            placeholder="введите email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="my-2">
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
        <Button variant="primary" className="w-100% m-auto" type="submit">
          {isLocation ? "Войти" : "Создать"}
        </Button>
      </form>
    </div>
  );
};

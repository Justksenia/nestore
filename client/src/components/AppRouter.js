import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../index";
import { Auth } from "../pages/Auth";
import { Shop } from "../pages/Shop";
import { Admin } from "../pages/Admin";
import { Cart } from "../pages/Cart";
import { DevicePage } from "../pages/DevicePage";
import {Favorite} from "../pages/Favorite";

export const AppRouter = () => {
  const { user } = useContext(Context);
  return (
    <div className="w-90vw m-auto">
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/registration" element={<Auth />} />
      <Route path="/device/:id" element={<DevicePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorite/>}/>
      <Route path="/" element={<Shop />} />

      {user.isAdmin && (
        <>
          <Route path="/admin" element={<Admin />} />
        </>
      )}

      <Route path="*" element={<Shop />} />
    </Routes>

    </div>

  );
};

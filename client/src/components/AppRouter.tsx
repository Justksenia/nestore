import { Routes, Route } from "react-router-dom";

import { Auth } from "../pages/Auth";
import { Shop } from "../pages/Shop";
import { Admin } from "../pages/Admin";
import { Cart } from "../pages/Cart";
import { DevicePage } from "../pages/DevicePage";
import {Favorite} from "../pages/Favorite";
import { useAppSelector } from "../hooks/redux";
import type { RootState } from "../stores/store";



export const AppRouter = () => {
  const isAdmin=useAppSelector((state:RootState)=>state.userReducer.isAdmin)
  const isAuth=useAppSelector((state:RootState)=>state.userReducer.isAuth)
  return (
    <div className="w-90vw m-auto">
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/registration" element={<Auth />} />
      <Route path="/device/:id" element={<DevicePage />} />
     
      <Route path="/" element={<Shop />} />
      {isAuth && (
        <>
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorite/>}/>
        </>
      )}

      {isAdmin && (
        <>
          <Route path="/admin" element={<Admin />} />
        </>
      )}

      <Route path="*" element={<Shop />} />
    </Routes>

    </div>

  );
};

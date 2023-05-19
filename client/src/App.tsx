import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { RootState } from "./stores/store";
import { AppRouter } from "./components/AppRouter";
import { HeaderBar } from "./components/HeaderBar";
import { authApi } from "./service/authApi";
import { useAppSelector } from "./hooks/redux";
import { useDispatch } from "react-redux";
import { setToken } from "./stores/reducers/UserSlice";

const App = () => {



  let user=useAppSelector((state:RootState)=>state.userReducer.user)

  const dispatch=useDispatch()
useEffect(()=>{
  dispatch(setToken())
},[])
  


// if (data) {
//   console.log(user)
// }

  // useEffect(() => {
  //   check()
  //     .then((data) => {
  // console.log(data)
  //       if (data.role == "ADMIN") {
        
  //       }
  //     })
  //     .finally(() => setLoading(false));
  // }, []);

  return (
    <>
      <BrowserRouter>
        <HeaderBar/>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};

export default App;

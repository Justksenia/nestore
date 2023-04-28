import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./index";
import { AppRouter } from "./components/AppRouter";
import { HeaderBar } from "./components/HeaderBar";
import { check } from "./http/userApi";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    check()
      .then((data) => {
        user.setIsAuth(true);
        user.setUser(data)
        if (data.role == "ADMIN") {
          user.setAdmin(true);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <BrowserRouter>
        <HeaderBar/>
        <AppRouter />
      </BrowserRouter>
    </>
  );
});

export default App;

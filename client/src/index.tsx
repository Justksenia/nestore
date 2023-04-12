import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';

//ispravit
export const Context=createContext(null as any);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      device: new DeviceStore()
    }} >
    <App />
    </Context.Provider>
  </React.StrictMode>
);

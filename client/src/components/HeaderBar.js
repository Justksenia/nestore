import { observer } from 'mobx-react-lite';
import { useContext} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Context } from '../index';
import { logOut } from '../http/userApi';

export const HeaderBar=observer(()=> {
    const {user}=useContext(Context)
   
    const logOutSession=()=>{
        user.setIsAuth(false)
        logOut()
    }
    
  return (
  
      <header className='bg-black h-20 flex justify-between items-center px-20' >
       
          <Link to="/"><span className="text-white text-22">ne:</span> <span className="text-pink text-22">Store</span></Link>
          
          {user.isAdmin &&
          <div>
           <NavLink to="/admin" className="text-white mx-3 hover:text-pink">Админ</NavLink>
           <button onClick={()=>user.setAdmin(false)} className="text-white mx-3  hover:text-pink">Выйти</button>
           </div>
          }
          {!user.isAdmin && !user.isAuth ?
             <div>
             <NavLink to="/login" className="text-white mx-3  hover:text-pink">Вход</NavLink>
             <NavLink to="/registration" className="text-white mx-3  hover:text-pink">Регистрация</NavLink>
             </div>
             : null
        } 
           {user.isAuth && !user.isAdmin ?
            <div className='flex'>
                <div className='text-white'>Hello, {user._user.name}</div>
            <NavLink to="/favorites" className="text-white mx-3  hover:text-pink" >
            
            <div>
            <svg width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#e30475" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 4c-3.2 0-5 2.667-5 4 0-1.333-1.8-4-5-4S3 6.667 3 8c0 7 9 12 9 12s9-5 9-12c0-1.333-.8-4-4-4z"></path></g></svg>
                </div>
            </NavLink>
            <NavLink to="/cart" className="text-white mx-3  hover:text-pink">
            <svg width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#e30475" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1m17 0h-1m0 0-1 10H5L4 10m16 0h-4M4 10h4m4 4v2m3-2v2m-6-2v2m-1-6h8m-8 0V8c0-1.333.8-4 4-4s4 2.667 4 4v2"></path></g></svg>

            </NavLink>
            <button className="text-white mx-3  hover:text-pink" onClick={logOutSession}>
                <svg width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#e30475"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#e30475" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4h3a2 2 0 0 1 2 2v1m-5 13h3a2 2 0 0 0 2-2v-1M4.425 19.428l6 1.8A2 2 0 0 0 13 19.312V4.688a2 2 0 0 0-2.575-1.916l-6 1.8A2 2 0 0 0 3 6.488v11.024a2 2 0 0 0 1.425 1.916zM9.001 12H9m7 0h5m0 0-2-2m2 2-2 2"></path></g></svg>

            </button>
            </div>
           :
        null
          } 

      </header>
      
  );
})


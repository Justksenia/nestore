import { observer } from 'mobx-react-lite';
import { useContext} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Context } from '../index';

export const NavBar=observer(()=> {
    const {user}=useContext(Context)

    //style navlink  className={({ isActive, isPending }) =>
   // isPending ? "pending" : isActive ? "active" : "" }
  

    
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
            <div>
            <NavLink to="/cart" className="text-white mx-3  hover: text-pink" >Cart</NavLink>
            <NavLink to="/cart" className="text-white mx-3  hover:text-pink">Favorites</NavLink>
            <button className="text-white mx-3  hover:text-pink" onClick={()=>user.setAuth(false)}>Выход</button>
            </div>
           :
        null
          } 

      </header>
      
  );
})


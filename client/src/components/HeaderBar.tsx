
import { Link, NavLink } from 'react-router-dom';
import type { RootState } from '../stores/store';


import { useAppSelector } from '../hooks/redux';
import { useDispatch } from 'react-redux';
import { logout } from '../stores/reducers/UserSlice';
import Button from './UI/Button';
import { Exit } from './UI/SvgButton/Exit';
import { PinkHearthBold } from './UI/SvgButton/PinkHearthBold';
import { Cart } from './UI/SvgButton/Cart';
export const HeaderBar=()=> {


    let isAuth=useAppSelector((state:RootState)=>state.userReducer.isAuth)
    let isAdmin=useAppSelector((state:RootState)=>state.userReducer.isAdmin)
    const dispatch=useDispatch()
    
  return (
  
      <header className='bg-black h-20 flex justify-between items-center px-20' >
       
          <Link to="/"><span className="text-white text-22">ne:</span> <span className="text-pink text-22">Store</span></Link>
          
          {isAdmin &&
          <div>
           <NavLink to="/admin" className="text-white mx-3 hover:text-pink">Админ</NavLink>
           <Button   onClick={()=>dispatch(logout())}>Выйти</Button>
           </div>
          }
          {!isAdmin && !isAuth ?
             <div>
             <NavLink to="/login" className="text-white mx-3  hover:text-pink">Вход</NavLink>
             <NavLink to="/registration" className="text-white mx-3  hover:text-pink">Регистрация</NavLink>
             </div>
             : null
        } 
           {isAuth && !isAdmin ?
            <div className='flex items-center'>
                
            <NavLink to="/favorites" className='hover:translate-y-1' >
            <PinkHearthBold/>
                        
            </NavLink>
            <NavLink to="/cart" className="hover:translate-y-1 mx-4">
            <Cart/>
            </NavLink>
            <Button variant="normal" className='hover:translate-y-1' onClick={()=>dispatch(logout())}>
                <Exit />
            </Button>
            </div>
           :
        null
          } 

      </header>
      
  );
}


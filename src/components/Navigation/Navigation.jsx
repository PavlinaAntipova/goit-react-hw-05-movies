import { NavLink } from "react-router-dom";

import s from './Navigation.module.css'

export default function Navigation() {
    const className = isActive => isActive ? `${s.navLink} ${s.active}` : s.navLink;
    
    return (
        <nav>
            <NavLink className={({ isActive }) => className(isActive)} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => className(isActive)} to='movies'>Movies</NavLink>
      </nav>
 
  );
};
import React from 'react';
import menu_style from './Menu.module.css';
function Menu() {
  return(
  <div className={menu_style.menu}>
    <ul className={menu_style.ul}>
        <li className={menu_style.li}><a className={menu_style.a}>Home</a></li>
        <li className={menu_style.li}><a className={menu_style.a}>About</a></li>
        <li className={menu_style.li}><a className={menu_style.a}>Content</a></li>
        <li className={menu_style.li}><a className={menu_style.a}>login</a></li>
        <li className={menu_style.li}><a className={menu_style.a}>logout</a></li>
    </ul>
  </div>
)};

export default Menu;

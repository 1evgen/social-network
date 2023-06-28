import React from "react";
import s from './Header.module.css'
 import logo from '../photo/logoPL.png';


export const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo}/>
            {/*<img src="https://seeklogo.com/images/L/leicester-city-fc-logo-FD9C3CA26E-seeklogo.com.png" alt="logo"/>*/}
        </header>
    )
}

// "https://seeklogo.com/images/L/leicester-city-fc-logo-FD9C3CA26E-seeklogo.com.png"
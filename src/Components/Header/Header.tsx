import React from "react";
import s from './Header.module.css'
import logo from '../../assets/imgs/pizza-logo.png';


export const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo}/>

        </header>
    )
}

// "https://seeklogo.com/images/L/leicester-city-fc-logo-FD9C3CA26E-seeklogo.com.png"
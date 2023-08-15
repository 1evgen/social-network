import React from "react";
import s from './Header.module.css'
import logo from '../../assets/imgs/pizza-logo.png';
import {NavLink} from "react-router-dom";
import {InfoAuthType, StateType} from "../../Redux/auth-reducer";
import logo__img from '../../assets/imgs/logo__img.png'
type HeaderPropsType = {
    auth: StateType
    setAuthUserData: (data: InfoAuthType)=> void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>

            <div className={s.logo}>
            <img src={logo}/>
            </div>
            <div className={s.loginBlock}>
                {props.auth.isAuth ? <img className={s.login__img} src={logo__img}/> :
                    <NavLink className={s.login} to={'/login'}>Login</NavLink> }

            </div>
        </header>
    )
}

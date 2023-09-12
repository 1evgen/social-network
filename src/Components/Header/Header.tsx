import React from "react";
import s from './Header.module.css'
import logo from '../../assets/imgs/pizza-logo.png';
import {NavLink, Redirect} from "react-router-dom";
import {InfoAuthType, StateType} from "../../Redux/auth-reducer";
import logo__img from '../../assets/imgs/logo__img.png'

type HeaderPropsType = {
    auth: StateType
    setAuthUserData: (data: InfoAuthType)=> void
    logout: ()=> void
}

export const Header = (props: HeaderPropsType) => {
    //
    // if(!props.auth.isAuth){
    //    return <Redirect to={'/login'}/>
    // }
    return (
        <header className={s.header}>
            <div className={s.container}>
            <div className={s.logo}>
            <img src={logo}/>
            </div>

            <div className={s.loginBlock}>
                {props.auth.isAuth ?
                    <div className={s.authUser} >
                    <img className={s.login__img} src={logo__img}/>
                    <div className={s.nameLogin}>{props.auth.login}</div>
                        <div onClick={props.logout} className={s.logout}>Logout</div>
                    </div>
                    :
                    <NavLink className={s.login} to={'/login'}>Login</NavLink> }


            </div>
            </div>
        </header>
    )
}

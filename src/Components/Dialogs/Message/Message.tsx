import s from './../Dialog.module.css'
import {NavLink} from "react-router-dom";


type typeMessage = {
    message: string
}

export  const  Message = (props:typeMessage) => {
    return (
        <div className={s.messages}>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}
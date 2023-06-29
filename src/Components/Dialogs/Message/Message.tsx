import s from './../Dialog.module.css'
import {NavLink} from "react-router-dom";
import React from "react";
// import s from './Message.module.css'

type typeMessage = {
    message: string
}

let newLinkMessage = React.createRef<HTMLTextAreaElement>()

export  const  Message = (props:typeMessage) => {
    return (
        <div className={s.messages}>
            <div className={s.message}>{props.message}</div>
            <div>
            </div>
        </div>
    )
}
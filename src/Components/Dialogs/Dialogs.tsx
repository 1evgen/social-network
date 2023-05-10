import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";
import {Message} from "./Message/Message";
import {DialogsItem} from "./Dialogitem/Dialogitem";
import React from "react";

type dialogsTypeProps = {
    id: number
    name: string
}

type messageTypeProps = {
    id: number
    message: string
}

type typeForDialogs = {
    dialogs: Array<dialogsTypeProps>
    messages: Array<messageTypeProps>
}

export const Dialogs: React.FC<typeForDialogs> = ({dialogs,messages }) => {

    let dialog = dialogs.map((d) => <DialogsItem id={d.id} name={d.name}/>)
    let message = messages.map((m) => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
            </div>
        </div>
    )
}



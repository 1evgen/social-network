import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";
import {Message} from "./Message/Message";
import {DialogsItem} from "./Dialogitem/Dialogitem";
import React, {ChangeEvent} from "react";
import {actionType, sendMessageCreator, typeStore, updateNewMessageBodyCreator} from "../../Redux/State";

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
    store: typeStore


}

export const Dialogs: React.FC<typeForDialogs> = ({     dialogs,
                                                        messages,
                                                        store,



}) => {

    let dialog = dialogs.map((d) => <DialogsItem id={d.id} name={d.name}/>)
    let message = messages.map((m) => <Message message={m.message}/>)

    let newMessageBody = store.getState().dialog.newMessageBody

    const onClickHandler = () => {
        store.dispatch(sendMessageCreator())
    }

   const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>)=> {
        let body = e.currentTarget.value
       store.dispatch(updateNewMessageBodyCreator(body))
   }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
            <div> {message}</div>
                <div> <textarea value={newMessageBody}
                                placeholder={'Enter your message'}
                                onChange={onNewMessageChange}
                /></div>
                <div><button onClick={onClickHandler}> Send Message</button></div>

            </div>
        </div>
    )
}



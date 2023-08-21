import s from './Dialog.module.css'
import {Message} from "./Message/Message";
import {DialogsItem} from "./Dialogitem/Dialogitem";
import React, {ChangeEvent} from "react";
import {DialogsPageType} from "../../Redux/dialog-reducer";
import {Redirect} from "react-router-dom";


type dialogsTypeProps = {
    id: number
    name: string
}

type messageTypeProps = {
    id: number
    message: string
}

type typeForDialogs = {
     dialogsPage: DialogsPageType
     sendMessage: () => void
     onNewMessageChange: (body: string)=> void
     isAuth: boolean
}

 export const Dialogs: React.FC<typeForDialogs> = ({
                                                        dialogsPage,
                                                        sendMessage,
                                                        onNewMessageChange,
                                                        isAuth

}) => {

    let dialog =  dialogsPage.dialogsData.map((d) => <DialogsItem key={d.id} id={d.id} name={d.name}/>)
    let message = dialogsPage.messagesData.map((m) => <Message key={m.id} message={m.message}/>)

    const onClickHandler = () => {
        sendMessage()
    }

   const onInputChange = (e: ChangeEvent<HTMLTextAreaElement>)=> {
        let body = e.currentTarget.value
        onNewMessageChange(body)
   }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
            <div> {message}</div>
                <div> <textarea value={dialogsPage.newMessageBody}
                                placeholder={'Enter your message'}
                                onChange={onInputChange}
                /></div>
                <div><button onClick={onClickHandler}> Send Message</button></div>

            </div>
        </div>
    )
}



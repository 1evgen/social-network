import s from './Dialog.module.css'
import {Message} from "./Message/Message";
import {DialogsItem} from "./Dialogitem/Dialogitem";
import React, {ChangeEvent} from "react";


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
     sendMessageCreator: () => void
     onNewMessageChange: (body: string)=> void
     newMessageBody: string
}

 export const Dialogs: React.FC<typeForDialogs> = ({
                                                        dialogs,
                                                        messages,
                                                        sendMessageCreator,
                                                        newMessageBody,
                                                        onNewMessageChange


}) => {

    let dialog = dialogs.map((d) => <DialogsItem id={d.id} name={d.name}/>)
    let message = messages.map((m) => <Message message={m.message}/>)

    const onClickHandler = () => {
        sendMessageCreator()
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
                <div> <textarea value={newMessageBody}
                                placeholder={'Enter your message'}
                                onChange={onInputChange}
                /></div>
                <div><button onClick={onClickHandler}> Send Message</button></div>

            </div>
        </div>
    )
}



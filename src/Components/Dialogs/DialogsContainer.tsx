
import React from "react";
import {sendMessageCreator, typeStore, updateNewMessageBodyCreator} from "../../Redux/Store";
import {Dialogs} from "./Dialogs";

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

export const DialogsContainer: React.FC<typeForDialogs> = ({     dialogs,
                                                        messages,
                                                        store,

}) => {

    let newMessageBody = store.getState().dialog.newMessageBody
    const sendMessage = () => {
        store.dispatch(sendMessageCreator())
    }

   const onNewMessageChange = (body: string)=> {
       store.dispatch(updateNewMessageBodyCreator(body))
   }
    return (
            <div>

    <Dialogs sendMessageCreator={sendMessage}
             onNewMessageChange={onNewMessageChange}
             dialogs={dialogs}
             messages={messages}
             newMessageBody={newMessageBody}
    />
        </div>
    )
}



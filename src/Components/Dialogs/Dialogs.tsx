import s from './Dialog.module.css'
import {Message} from "./Message/Message";
import {DialogsItem} from "./Dialogitem/Dialogitem";
import React from "react";
import {DialogsPageType} from "../../Redux/dialog-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormField, maxLength10} from "../Common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";


type typeForDialogs = {
     dialogsPage: DialogsPageType
     sendMessage: (values: AddMessageFormType) => void
     onNewMessageChange: (body: string)=> void
     isAuth: boolean
}

 export const Dialogs: React.FC<typeForDialogs> = ({
                                                        dialogsPage,
                                                        sendMessage,
                                                        isAuth

}) => {

    let dialog =  dialogsPage.dialogsData.map((d) => <DialogsItem key={d.id} id={d.id} name={d.name}/>)
    let message = dialogsPage.messagesData.map((m) => <Message key={m.id} message={m.message}/>)


     const addNewMessage = (values: AddMessageFormType) => {
         sendMessage(values)
     }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
            <div> {message}</div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export type AddMessageFormType = {
       newMessageBody: string
}



export const addMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props)=> {
    return (
        <form onSubmit={props.handleSubmit} >
    <div>
        <Field component={FormField}
               name='newMessageBody'
               placeholder={'Enter your message'}
               validate={[required, maxLength10]}
        />
    </div>
    <div>
        <button>Send Message</button>
    </div>
        </form>
        )
}
export const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(addMessageForm)
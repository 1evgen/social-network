import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

type typeForDialogs = {
    id: number
    name: string
}

const DialogsItem = (props:typeForDialogs ) => {
let path = '/dialogs/' + props.id
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


type typeMessage = {
    message: string
}

const  Message = (props:typeMessage) => {
    return (
        <div className={s.messages}>
                 <div className={s.message}>{props.message}</div>
             </div>
    )
}


export const Dialogs = () => {
    let dialogsData = [
        {id:1, name: "Ward" },
        {id:2, name: "Maddison" },
        {id:3, name: "Tielemans" },
        {id:4, name: "Ndidi" },
        {id:5, name: "Daka" },
    ]

    const messagesData = [
        {id: 1, message: 'Hi' },
        {id: 2, message: 'Hello' },
        {id: 3, message: 'How are you' },
        {id: 4, message: 'fine' },
        {id: 5, message: 'Yo' },
    ]

    let dialog = dialogsData.map((d)=>  <DialogsItem id = {d.id} name= {d.name}></DialogsItem>  )
    let message = messagesData.map((m)=> <Message message= {m.message} /> )
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
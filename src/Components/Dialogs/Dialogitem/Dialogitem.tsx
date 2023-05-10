import s from '.Dialog.module.css'
import {NavLink} from "react-router-dom";

type typeForDialogs = {
    id: number
    name: string
}

export const DialogsItem = (props:typeForDialogs ) => {
    let path = '/dialogs/' + props.id
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

import s from './../Dialog.module.css'
import {NavLink} from "react-router-dom";
import React from "react";
// import s from './Message.module.css'

type typeMessage = {
    message: string
}

let newLinkMessage = React.createRef<HTMLTextAreaElement>()

// const addMessage = () => {
//     let text = newLinkMessage.current?.value;
//     if(text){
//         alert(text);
//     }

//
// }


export  const  Message = (props:typeMessage) => {
    return (
        <div className={s.messages}>
            <div className={s.message}>{props.message}</div>
            <div>
                {/*<textarea ref={newLinkMessage}> </textarea>*/}
                {/*<button onClick={addMessage}>Add message</button>*/}
            </div>
        </div>
    )
}
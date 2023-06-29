import React from "react";
import {sendMessageCreator,  updateNewMessageBodyCreator} from "../../Redux/Store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {Dispatch} from "redux";

// type dialogsTypeProps = {
//     id: number
//     name: string
// }
//
// type messageTypeProps = {
//     id: number
//     message: string
// }
//
// type typeForDialogs = {
//     dialogs: Array<dialogsTypeProps>
//     messages: Array<messageTypeProps>
//     store: typeStore
// }

// export const DialogsContainer: React.FC<typeForDialogs> = ({     dialogs,
//                                                         messages,
//                                                         store,
//
// }) => {
//
//     let newMessageBody = store.getState().dialog.newMessageBody
//     const sendMessage = () => {
//         store.dispatch(sendMessageCreator())
//     }
//    const onNewMessageChange = (body: string)=> {
//        store.dispatch(updateNewMessageBodyCreator(body))
//    }
//     return (
//             <div>
//
//     <Dialogs sendMessageCreator={sendMessage}
//              onNewMessageChange={onNewMessageChange}
//              dialogs={dialogs}
//              messages={messages}
//              newMessageBody={newMessageBody}
//     />
//         </div>
//     )
// }


const mapStateToProps = (state: AppStateType )=> {
   return {
     dialogsPage: state.dialogsPage
   }
}

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchToPropsType = {
    onNewMessageChange: (body: string) => void
    sendMessage: () => void
}

const mapDispatchToProps = (dispatch: Dispatch) => {
   return {
       onNewMessageChange: (body: string) => {
        dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
        dispatch(sendMessageCreator())
    }
}
}
export const  DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);
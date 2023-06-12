import {actionType, dialogType} from "./State";
import {typeMyPostsProps} from "../App";




export const dialogReducer = (state: dialogType, action: actionType): dialogType => {

    switch (action.type){
        case "UPDATE-NEW-MESSAGE-BODY":
            state.dialog.newMessageBody = action.body;
            return state
        case "SEND-MESSAGE" :
            let body = state.dialog.newMessageBody;
            state.dialog.newMessageBody = '';
            state.dialog.messagesData.push({id: 6, message: body})
            return state
        default:
            return state

    }

}
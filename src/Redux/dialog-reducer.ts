import {AddMessageFormType} from "../Components/Dialogs/Dialogs";

export type dialogsData = {
    id: number;
    name: string;
};
type messagesDataType = {
    id: number;
    message: string;
};

export type DialogsPageType = {
    dialogsData: Array<dialogsData>
    messagesData: Array<messagesDataType>
}

let initialState: DialogsPageType = {
    dialogsData: [
        { id: 1, name: "Ward" },
        { id: 2, name: "Maddison" },
        { id: 3, name: "Tielemans" },
        { id: 4, name: "Ndidi" },
        { id: 5, name: "Daka" },
    ],
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello" },
        { id: 3, message: "How are you" },
        { id: 4, message: "fine" },
        { id: 5, message: "Yo" },
    ],
   // newMessageBody: ""
}
export type DialogActionType = SendMessageType

export const sendMessageCreator = (values: AddMessageFormType): SendMessageType => {
    return {
        type: "SEND-MESSAGE",
        values
    }
}

export const dialogReducer = (state = initialState, action: DialogActionType): DialogsPageType => {
    switch (action.type){
        case "SEND-MESSAGE" :
            let body = action.values.newMessageBody
            let newMessage = {id: Date.now(), message:body}
          return {...state, messagesData: [...state.messagesData, newMessage]}
        default:
            return state

    }

}


export type SendMessageType = {
    type: "SEND-MESSAGE"
    values: AddMessageFormType
}

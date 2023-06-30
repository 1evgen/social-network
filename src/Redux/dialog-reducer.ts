import { SendMessageType, UpdateNewMessageBodyType} from "./Store";

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
    newMessageBody: string
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
    newMessageBody: ""
}
export type actionType =  UpdateNewMessageBodyType | SendMessageType

export const sendMessageCreator = (): SendMessageType => {
    return {
        type: "SEND-MESSAGE",
    }
}
export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBodyType => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    };
}


export const dialogReducer = (state = initialState, action: actionType): DialogsPageType => {
    switch (action.type){
        case "UPDATE-NEW-MESSAGE-BODY":
        return {...state, newMessageBody: action.body}
        case "SEND-MESSAGE" :
            let body = state.newMessageBody
            let newMessage = {id: Date.now(), message:body}
          return {...state, messagesData: [...state.messagesData, newMessage], newMessageBody: ''}
        default:
            return state

    }

}
import {typeMyPostsProps} from "../App";
import {dialogReducer} from "./dialog-reducer";
import {profileReducer} from "./profile-reducer";


export type AddPostActionType = {
    type: "ADD-POST"
    newPostText: string
 }
export type UpdateActionType = {
    type: "UPDATE-POST"
    newText: string
}
export type  UpdateNewMessageBodyType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string
}
export type SendMessageType = {
    type: "SEND-MESSAGE"
}


export type actionType = AddPostActionType | UpdateActionType | UpdateNewMessageBodyType | SendMessageType



export const addPostActionCreator = (newPostText: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    }
}
export const changePostAC = (newText: string): UpdateActionType => {
    return {
        type: "UPDATE-POST",
        newText: newText
    }
}

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

// export let store: typeStore = {
//     _state: {
//         dialog: {
//             dialogsData: [
//                 {id: 1, name: "Ward"},
//                 {id: 2, name: "Maddison"},
//                 {id: 3, name: "Tielemans"},
//                 {id: 4, name: "Ndidi"},
//                 {id: 5, name: "Daka"},
//             ],
//             messagesData: [
//                 {id: 1, message: "Hi"},
//                 {id: 2, message: "Hello"},
//                 {id: 3, message: "How are you"},
//                 {id: 4, message: "fine"},
//                 {id: 5, message: "Yo"},
//             ],
//             newMessageBody: " "
//         },
//         post: {
//             postData: [
//                 {id: 1, message: "Hi how are you", likesCount: 15},
//                 {id: 2, message: "Hi, i'm fine thanks", likesCount: 5},
//             ],
//             newPostText: "enter a post"
//         },
//     },
//     getState() {
//         return this._state
//     },
//
//     _callSubscriber() {
//         console.log("s");
//     },
//
//     subscribe(observer) {this._callSubscriber = observer},
//
//     dispatch(action) {
//         dialogReducer(this._state, action);
//         profileReducer(this._state, action);
//         this._callSubscriber(this._state);
//     }
// };
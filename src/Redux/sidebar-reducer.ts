import {actionType, dialogType} from "./Store";

let initialState: dialogType = {
    dialog: {
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
        newMessageBody: " "
    },
    post: {
        postData: [
            { id: 1, message: "Hi how are you", likesCount: 15 },
            { id: 2, message: "Hi, i'm fine thanks", likesCount: 5 },
        ],
        newPostText: "it-kamasutra.com"
    },
}




export  const  sidebarReducer = (state: dialogType = initialState,  action: actionType) => {
    return state
}
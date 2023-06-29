import {actionType, dialogType, StateType} from "./Store";
import {typeMyPostsProps} from "../App";


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

export const profileReducer = (state: dialogType = initialState,  action: actionType): dialogType=> {

    switch (action.type) {
        case "ADD-POST":
            let newPost: typeMyPostsProps = {
                id: new Date().getDate(),
                message: action.newPostText,
                likesCount: 10,
            }
            state.post.postData.push(newPost);
            return state
        case "UPDATE-POST":
            state.post.newPostText = action.newText;
            return state
        default:
            return state
    }

























        //         if (action.type === "ADD-POST") {
        //     let newPost: typeMyPostsProps = {
        //         id: new Date().getDate(),
        //         message: action.newPostText,
        //         likesCount: 10,
        //     };
        //     state.post.postData.push(newPost);
        // } else if (action.type === "UPDATE-POST") {
        //             state.post.newPostText = action.newText;
        // }


}
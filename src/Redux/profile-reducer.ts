import {actionType, dialogType, StateType} from "./State";
import {typeMyPostsProps} from "../App";


export const profileReducer = (state: dialogType,  action: actionType): dialogType=> {

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
import {AddPostActionType, UpdateActionType} from "./Store";
import {typeMyPostsProps} from "../App";

type PostDataType = {
    id: number;
    message: string;
    likesCount: number;
};
export type PostType = {
    post: {
        postData: Array<PostDataType>
        newPostText: string
    }
}


let initialState: PostType = {
    post: {
        postData: [
            { id: 1, message: "Hi how are you", likesCount: 15 },
            { id: 2, message: "Hi, i'm fine thanks", likesCount: 5 },
        ],
        newPostText: "enter your post"
    },
}
export type actionType = AddPostActionType | UpdateActionType

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

export const profileReducer = (state = initialState ,  action: actionType): PostType=> {

    switch (action.type) {
        case "ADD-POST":
            const newPostText = state.post.newPostText
            let newPost: typeMyPostsProps = {
                id: Date.now(),
                message: newPostText,
                likesCount: 10,
            }
            return {...state,
                post: {...state.post, postData: [...state.post.postData, newPost], newPostText: ''}}

        case "UPDATE-POST":
          return {...state, post: {...state.post, newPostText: action.newText}}
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
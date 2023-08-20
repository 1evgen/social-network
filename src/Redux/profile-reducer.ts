import {AddPostActionType, UpdateActionType} from "./Store";
import {typeMyPostsProps} from "../App";
import {AppDispatch, AppThunk} from "./ReduxStore";
import {usersApi} from "../API/api";

type PostDataType = {
    id: number;
    message: string;
    likesCount: number;
};


export type PostType = {
    post: {
        postData: Array<PostDataType>
        newPostText: string
    },
    profile: ProfileType
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosProfileType = {
    small: string | null
    large: string | null

}
export type ProfileType = {
    userId: number,
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosProfileType
} | null

export type setUserProfileActionType = {
    type: 'SET-USER-PROFILE',
    profile: ProfileType
}

let initialState: PostType = {
    post: {
        postData: [
            { id: 1, message: "コワブンガ", likesCount: 15 },
            { id: 2, message: "cowabunga", likesCount: 5 },
        ],
        newPostText: "enter your post",
    },
    profile: null
}
export type ProfileActionType = AddPostActionType | UpdateActionType | setUserProfileActionType

export const profileReducer = (state = initialState ,  action: ProfileActionType): PostType=> {

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
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}

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

export const setUserProfileAC = (profile: ProfileType): setUserProfileActionType=> {
    return {type: "SET-USER-PROFILE", profile}
}


export const getProfileThunkCreator = (userId: string): AppThunk => (dispatch)=> {
    return usersApi.getProfile(userId)
            .then(response => {
                dispatch(setUserProfileAC(response.data))
            })
}

///  AppThunk<Promise<void>>
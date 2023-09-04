import {typeMyPostsProps} from "../App";
import {AppThunk} from "./ReduxStore";
import {profileAPI, usersApi} from "../API/api";
import {Dispatch} from "redux";

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
    status: string
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

export type SetStatusActionType = {
    type: "SET-STATUS"
    status: string
}
export type AddPostActionType = {
    type: "ADD-POST"
    newPostText: string
}
export type UpdateActionType = {
    type: "UPDATE-POST"
    newText: string
}

let initialState: PostType = {
    post: {
        postData: [
            {id: 1, message: "コワブンガ", likesCount: 15},
            {id: 2, message: "cowabunga", likesCount: 5},
        ],
        newPostText: "enter your post",
    },
    profile: null,
    status: ''
}
export type ProfileActionType = AddPostActionType
    | UpdateActionType
    | setUserProfileActionType
    | SetStatusActionType

export const profileReducer = (state = initialState, action: ProfileActionType): PostType => {

    switch (action.type) {
        case "ADD-POST":
            const newPostText = state.post.newPostText
            let newPost: typeMyPostsProps = {
                id: Date.now(),
                message: newPostText,
                likesCount: 10,
            }
            return {
                ...state,
                post: {...state.post, postData: [...state.post.postData, newPost], newPostText: ''}
            }
        case "UPDATE-POST":
            return {...state, post: {...state.post, newPostText: action.newText}}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS" : {
            console.log(action.status)
            return {...state, status: action.status}
        }
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

export const setStatusAC = (status: string) => {
    return {type: "SET-STATUS", status}
}


export const setUserProfileAC = (profile: ProfileType): setUserProfileActionType => {
    return {type: "SET-USER-PROFILE", profile}
}


export const getProfileThunkCreator = (userId: string): AppThunk => (dispatch) => {
    return usersApi.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data))
        })
}

export const setStatusThunkCreator = (userId: string): AppThunk => (dispatch: Dispatch) => {
    return profileAPI.getStatus(userId).then((res => {
            dispatch(setStatusAC(res.data))
        }
    ))
}


export const updateStatusThunkCreator = (status: string): AppThunk => (dispatch: any) => {
    return profileAPI.updateStatus(status)
        .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setStatusThunkCreator('29311'))
                }
            }
        )
}

///  AppThunk<Promise<void>>
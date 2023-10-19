import {typeMyPostsProps} from "../App";
import {AppThunk} from "./ReduxStore";
import {profileAPI, usersApi} from "../API/api";
import {Dispatch} from "redux";
import {errorMassage} from "../../src/Components/utils/Error";

let initialState: PostType = {
    post: {
        postData: [
            {id: 1, message: "コワブンガ", likesCount: 15},
            {id: 2, message: "cowabunga", likesCount: 5},
        ],
    },
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action: ProfileActionType): PostType => {
    switch (action.type) {
        case "ADD-POST":
            const newPostText = action.newPostText
            let newPost: typeMyPostsProps = {
                id: Date.now(),
                message: newPostText,
                likesCount: 10,
            }
            return {
                ...state,
                post: {...state.post, postData: [...state.post.postData, newPost]}
            }
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

export const addPostActionCreator = (newPostText: string) => ({type: "ADD-POST", newPostText: newPostText} as const)
export const setStatusAC = (status: string) => ({type: "SET-STATUS", status} as const)
export const setUserProfileAC = (profile: ProfileType) => ({type: "SET-USER-PROFILE", profile} as const)


export const getProfileThunkCreator = (userId: string): AppThunk => async (dispatch) => {
    try{
        let response = await usersApi.getProfile(userId)
        dispatch(setUserProfileAC(response.data))
    } catch (error){errorMassage(error)}
}

export const setStatusThunkCreator = (userId: string): AppThunk =>  async (dispatch: Dispatch) => {
    try{
     let res = await profileAPI.getStatus(userId)
        dispatch(setStatusAC(res.data))
    }catch (error){errorMassage(error)}

}

export const updateStatusThunkCreator = (status: string): AppThunk => async (dispatch: any) => {
    try{
        let res = await profileAPI.updateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setStatusThunkCreator('29311'))
        }}catch (error){errorMassage(error)}
}

/// types
type PostDataType = {
    id: number;
    message: string;
    likesCount: number;
};
export type PostType = {
    post: {
        postData: Array<PostDataType>
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
export type ProfileActionType = AddPostActionType | setUserProfileActionType | SetStatusActionType
export type setUserProfileActionType = ReturnType<typeof setUserProfileAC>
export type SetStatusActionType = ReturnType<typeof setStatusAC>
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
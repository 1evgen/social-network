import {usersApi} from "../API/api";
import {AppDispatch, AppThunk} from "./ReduxStore";
import {errorMassage} from "../../src/Components/utils/Error";
import {objectHelper} from "../../src/Components/utils/object-helper/object-helper";

let initialState: UsersType = {
    users: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: UserActionType): UsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: objectHelper(state, action, true)
            }
        case 'UNFOLLOW':
            return {
                ...state, users: objectHelper(state,action, false)
            }
        case 'SET-USER':
            return {...state, users: [...action.user]}
        case  "SET-CURRENT-PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "SET-TOTAL-COUNT":
            return {
                ...state, totalUserCount: action.totalCount
            }
        case "TOGGLE-IS-FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "TOGGLE-IS-FOLLOWING_PROGRESS":

            return {
                ...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        default :
            return state
    }
}

export const followAC = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollowAC = (userID: number) => ({type: "UNFOLLOW", userID} as const)
export const setUserAC = (user: Array<infoAboutUserType>) => ({type: 'SET-USER', user} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage: currentPage} as const)
export const setTotalCountAC = (totalCount: number) => ({type: "SET-TOTAL-COUNT", totalCount: totalCount} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching} as const)
export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: number) => {
    return {type: "TOGGLE-IS-FOLLOWING_PROGRESS", isFetching, userId} as const
}

export const getUserThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(toggleIsFetchingAC(true))
        let resp = await usersApi.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUserAC(resp.items))
        dispatch(setTotalCountAC(resp.totalCount))
    } catch (error) {{errorMassage(error)}}
}
export const followThunkCreator = (userId: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(toggleIsFollowingProgressAC(true, userId))
        let response = await usersApi.followUser(userId)
        if (response.data.resultCode === 0) {dispatch(followAC(userId))}
        dispatch(toggleIsFollowingProgressAC(false, userId))
    } catch (error) {errorMassage(error)}
}

export const unfollowThunkCreator = (userId: number): AppThunk => async (dispatch) => {
    try {
        dispatch(toggleIsFollowingProgressAC(true, userId))
        let response = await usersApi.unfollowUser(userId)
        if (response.data.resultCode === 0) {dispatch(unFollowAC(userId))}
        dispatch(toggleIsFollowingProgressAC(false, userId))
    } catch(error){errorMassage(error)}
}

/// types
export type infoAboutUserType = {
    id: number;
    name: string;
    photos: {
        small: string | null;
        large: string | null;
    };
    status: string | null;
    followed: boolean;
};
export type UsersType = {
    users: Array<infoAboutUserType>;
    pageSize: number;
    totalUserCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: Array<number>
};

const FOLLOW = 'FOLLOW'
export type FollowACType = ReturnType<typeof followAC>
export type UnfollowACType = ReturnType<typeof unFollowAC>
type SetUserACType = ReturnType<typeof setUserAC>
type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
type SetTotalCount = ReturnType<typeof setTotalCountAC>
type ToggleIsFetchingType = ReturnType<typeof toggleIsFetchingAC>
type ToggleIsFollowingProgressType = ReturnType<typeof toggleIsFollowingProgressAC>

export type  UserActionType =
    FollowACType |
    UnfollowACType |
    SetUserACType |
    SetCurrentPageType |
    SetTotalCount |
    ToggleIsFetchingType |
    ToggleIsFollowingProgressType








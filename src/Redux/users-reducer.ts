
import {usersApi} from "../API/api";
import {AppDispatch, AppThunk} from "./ReduxStore";

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

// type LocationType = {
//     city: string;
//     country: string;
// };


export type UsersType = {
    users: Array<infoAboutUserType>;
    pageSize: number;
    totalUserCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: Array<number>
};

const FOLLOW = 'FOLLOW'

type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unFollowAC>
type SetUserACType = ReturnType<typeof setUserAC>

type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>

type SetTotalCount = ReturnType<typeof setTotalCountAC>

type ToggleIsFetchingType = ReturnType<typeof toggleIsFetchingAC>

type ToggleIsFollowingProgressType = ReturnType<typeof toggleIsFollowingProgressAC>

export type  UserActionType = FollowACType |
                              UnfollowACType |
                              SetUserACType |
                              SetCurrentPageType |
                              SetTotalCount |
                              ToggleIsFetchingType |
                              ToggleIsFollowingProgressType


let initialState: UsersType = {
    users: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}



export const usersReducer = (state = initialState ,  action: UserActionType): UsersType=> {

    switch (action.type) {
        case 'FOLLOW':
            return {...state,
                users:
                    state.users.map((el)=> el.id === action.userID ? {...el, followed: true}:el)}
        case 'UNFOLLOW':
            return {...state,
                users:
                    state.users.map((el)=> el.id === action.userID ? {...el, followed: false}:el)}
        case 'SET-USER':
            return  {...state, users: [...action.user]}
        case  "SET-CURRENT-PAGE":
            return  {
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
                    [...state.followingInProgress, action.userId]:
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        default :
            return state
    }
}

export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        userID
    } as const
}
export const unFollowAC =(userID: number) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const
}

export const setUserAC = (user: Array<infoAboutUserType>) => {
    return {
        type: 'SET-USER',
        user
    } as const
}

export const setCurrentPageAC = (currentPage: number)=> {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: currentPage
    } as const
}

export  const setTotalCountAC = (totalCount: number) => {
    return {
        type: "SET-TOTAL-COUNT",
        totalCount: totalCount
    } as const
}

export const toggleIsFetchingAC = (isFetching: boolean)=> {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    } as const
}

export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: number)=> {

    return {
        type: "TOGGLE-IS-FOLLOWING_PROGRESS",
        isFetching,
        userId
    } as const
}

export const getUserThunkCreator = (currentPage: number,pageSize: number )  => (dispatch: AppDispatch )=> {
        dispatch(toggleIsFetchingAC(true))
        return usersApi.getUsers(currentPage, pageSize)
            .then((resp) => {
                dispatch(toggleIsFetchingAC(false))
                dispatch(setUserAC(resp.items))
                dispatch(setTotalCountAC(resp.totalCount))
            })
    }

export const followThunkCreator = (userId: number)=> (dispatch: AppDispatch)=> {

        dispatch(toggleIsFollowingProgressAC(true, userId))
        usersApi.followUser(userId).then(response => {
            if(response.data.resultCode === 0){
                dispatch(followAC(userId))
            }
            dispatch(toggleIsFollowingProgressAC(false, userId))
        })
}

export const unfollowThunkCreator = (userId: number): AppThunk => (dispatch)=> {

        dispatch(toggleIsFollowingProgressAC(true, userId))
        usersApi.unfollowUser(userId).then(response => {
            if(response.data.resultCode === 0){
                dispatch(unFollowAC(userId))
            }
            dispatch(toggleIsFollowingProgressAC(false, userId))
        })
    }










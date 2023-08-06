import {AddPostActionType, UpdateActionType} from "./Store";

export type infoAboutUserType = {
    id: number,
    photoUrl: string
    name: string
    status: string
    followed: boolean
    location: LocationType
}
export type LocationType = {
    city: string,
    country: string
}
export type UsersType = {
    users: Array<infoAboutUserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
}

type FollowACType = {
    type: 'FOLLOW'
    userID: number
}
type UnfollowACType = {
    type: 'UNFOLLOW'
    userID: number
}
type SetUserACType = {
    type: 'SET-USER'
    user:  Array<infoAboutUserType>
}

type SetCurrentPageType = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}

type SetTotalCount = {
    type: "SET-TOTAL-COUNT"
    totalCount: number
}

export type  ActionType = FollowACType | UnfollowACType | SetUserACType | SetCurrentPageType | SetTotalCount


let initialState: UsersType = {
    users: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 1
}



export const usersReducer = (state = initialState ,  action: ActionType): UsersType=> {

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

        default :
            return state
    }
}

export const followAC = (userID: number) => {
    return {
        type: "FOLLOW" as const,
        userID
    }
}
export const unFollowAC =(userID: number) => {
    return {
        type: "UNFOLLOW" as const,
        userID
    }
}

export const setUserAC = (user: Array<infoAboutUserType>) => {
    return {
        type: 'SET-USER' as const,
        user
    }
}

export const setCurrentPageAC = (currentPage: number)=> {
    return {
        type: "SET-CURRENT-PAGE" as const,
        currentPage: currentPage
    }
}

export  const setTotalCountAC = (totalCount: number) => {
    return {
        type: "SET-TOTAL-COUNT" as const,
        totalCount: totalCount
    }
}
















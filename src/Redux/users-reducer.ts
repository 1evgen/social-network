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

export type  ActionType = FollowACType | UnfollowACType | SetUserACType
let initialState: UsersType = {users:[]};

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
        return  {...state, users: [...state.users, ...action.user]}
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




















import {AddPostActionType, UpdateActionType} from "./Store";
type infoAboutUserType = {
    id: number,
    fullName: string
    status: string
    followed: boolean
    location: LocationType
}
type LocationType = {
    city: string,
    country: string
}
type UsersType = {
   users: Array<infoAboutUserType>
}


////

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

type  ActionType = FollowACType | UnfollowACType | SetUserACType

let initialState: UsersType = {
       users :  [
            { id: 1, fullName: 'Harry Kane', status:  "I'd like to find a new club.",followed: false,
           location: {city: 'London', country: 'England'}},

            { id: 2, fullName: 'Harry Maguire', status:  "I'm Harry Maguire.",followed: true,
                location: {city: 'Manchester', country: 'England'}},

           { id: 1, fullName: 'Erling Haaland', status:  "Man city is champion",followed: true,
            location: {city: 'Manchester',country: 'Norway'}},

           { id: 1, fullName: 'Mohamed Salah', status:  'You\'ll Never Walk Alone', followed: false,
               location: {city: 'Liverpool', country: 'Egypt' }}
        ]
}

export const usersReducer = (state = initialState ,  action: ActionType): UsersType=> {

    switch (action.type) {
        case 'FOLLOW':
            return {...state,
                users: state.users.map((el)=> el.id === action.userID ? {...el, followed: true}:el)}
        case 'UNFOLLOW':
            return {...state,
                users: state.users.map((el)=> el.id === action.userID ? {...el, followed: false}:el)}
        case 'SET-USER':
        return  {...state, users: [...state.users, ...action.user]}
        default :
            return state
    }

}



export const followedAC = (userID: number) => {
    return {
        type: "FOLLOW",
        userID
    }
}
export const unFollowedAC =(userID: number) => {
    return {
        type: "UNFOLLOW",
        userID
    }
}

export const setUserAC = (user: Array<infoAboutUserType> ) => {
    return {
        type: 'SET-USER',
        user
    }
}




















import {AddPostActionType, UpdateActionType} from "./Store";


export type infoAboutUserType = {
    id: number,
    photoUrl: string
    fullName: string
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
       // users :  [
       //      { id: 1, photoUrl: 'https://icdn.caughtoffside.com/wp-content/uploads/2021/08/1006192898.jpg',
       //          fullName: 'Harry Kane', status:  "I'd like to find a new club.",followed: false,
       //          location: {city: 'London', country: 'England'}},
       //
       //      { id: 2,photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQm7zE-kUqB4_a2LkHooO29_AFokn9-JN8g&usqp=CAU',
       //          fullName: 'Harry Maguire', status:  "I'm Harry Maguire.",followed: true,
       //          location: {city: 'Manchester', country: 'England'}},
       //
       //     { id: 1,photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRewKpe7LI7bOMFxd4M1RS78UmXZNiUDGT2Hg&usqp=CAU',
       //          fullName: 'Erling Haaland', status:  "Man city is champion",followed: true,
       //          location: {city: 'Manchester',country: 'Norway'}},
       //
       //     { id: 1,photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9Obc9H-NHvvGNaUWi50lVUG0MQRTivTGMQ&usqp=CAU',
       //         fullName: 'Mohamed Salah', status:  'You\'ll Never Walk Alone', followed: false,
       //         location: {city: 'Liverpool', country: 'Egypt' }}
       //  ]


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




















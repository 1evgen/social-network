import {FollowACType, UnfollowACType, UsersType} from "../../../Redux/users-reducer";


export let objectHelper = (state: UsersType, action: UnfollowACType | FollowACType, followed: boolean)=> {
    return  state.users.map((el) => el.id === action.userID ? {...el, followed} : el)
}
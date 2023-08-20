
import {InfoAuthType, usersApi} from "../API/api";
import {AppThunk} from "./ReduxStore";

export type StateType = InfoAuthType & {
    isAuth: boolean
}

let initialState = {
    id: null,
    email: '',
    login: '',
    isAuth: false
}

type setUserDataActionType = {
    type: "SET-USER-DATA",
    data: InfoAuthType
}



export type AuthActionType = setUserDataActionType

export const authReducer = (state = initialState, action: AuthActionType): StateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state, ...action.data, isAuth: true
            }
        default :
            return state
    }
}

export const setUserDataAC = (data: InfoAuthType): setUserDataActionType => {
    return {type: "SET-USER-DATA", data}
}

export const AuthThunkCreator = (): AppThunk<Promise<void>> => (dispatch)=> {
        return usersApi.getMe()
            .then(response => {
                if(response.resultCode === 0){
                    dispatch(setUserDataAC(response.data))
                }
            })
}
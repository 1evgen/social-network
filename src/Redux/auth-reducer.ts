
import {authAPI, usersApi} from "../API/api";
import {AppThunk} from "./ReduxStore";
import {stopSubmit} from "redux-form";
// import stopSubmit from 'redux-form'
export type InfoAuthType = {
    id: number | null,
    email: string | null,
    login: string | null
    isAuth?: boolean
}

//// Types
export type StateType = InfoAuthType

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isLogin: false
}
type setUserDataActionType = {
    type: "SET-USER-DATA",
    data: InfoAuthType
}
export type DataAuthType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}
export type AuthActionType = setUserDataActionType | ReturnType<typeof LoginAC>

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


//// ACTIONS CREATOR
export const setUserDataAC = (data: InfoAuthType) => ({type: "SET-USER-DATA", data} as const)
export const LoginAC = (isLogin: boolean)=> {return {type: "SET-LOGIN", isLogin} as const}

/////// THUNK
export const AuthThunkCreator = (): AppThunk<Promise<void>> => (dispatch)=> {
        return authAPI.getMe()
            .then(response => {
                if(response.resultCode === 0){
                    dispatch(setUserDataAC(response.data))
                }
            })
}

export const loginTC = (dataAuth: DataAuthType): AppThunk => (dispatch)=> {
        return authAPI.login(dataAuth).then(response => {
                    if(response.data.resultCode === 0){
                        dispatch(AuthThunkCreator())
                    }else {
                        let messageError = response.data.resultCode > 0 ? response.data.messages[0] : 'some errors'
                       dispatch<any>(stopSubmit('login', {_error: messageError}))
                    }
        }).catch()
}

export const logoutTC = (): AppThunk => (dispatch)=> {
    return authAPI.logout().then(response => {
        if(response.data.resultCode === 0){
            dispatch(AuthThunkCreator())
            dispatch(setUserDataAC({id: null, email: null, login: null, isAuth: false}))
        }
    })
}
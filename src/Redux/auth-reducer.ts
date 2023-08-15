
export type InfoAuthType = {
    id: number | null,
    email: string,
    login: string
}



export type StateType = {
    resultCode: number
    messages: Array<string>,
    data:  InfoAuthType
    isAuth: boolean
}

let initialState = {
    resultCode: 0,
    messages: [],
    data: {
        id: null,
        email: '',
        login: ''
    },
    isAuth: false

}

type setUserDataActionType = {
    type: "SET-USER-DATA",
    data: InfoAuthType
}

export type actionType = setUserDataActionType

export const authReducer = (state = initialState, action: actionType): StateType => {
    switch (action.type) {
        case "SET-USER-DATA":
        return {
            ...state, ...action.data, isAuth: true


        }
        default :
            return  state
    }
}

export const setUserDataAC = (data: InfoAuthType): setUserDataActionType => {
        return {type: "SET-USER-DATA", data}
}
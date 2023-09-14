import {AppThunk} from "./ReduxStore";
import {AuthThunkCreator} from "./auth-reducer";

type StateType = {
    initialized: boolean
}

const initialState = {
    initialized: false
}

export type AppInitializedActionsType = ReturnType<typeof initializedAppAC>

export const appReducer = (state = initialState, action: AppInitializedActionsType): StateType=> {
        switch (action.type) {
            case "SET-AUTHORIZED":
           return  {...state, initialized: action.initialized}
            default :
                return  state
        }
}


export const initializedAppAC = (initialized: boolean) => ({type: 'SET-AUTHORIZED', initialized} as const)

export const initializeAppTC = (): AppThunk => async (dispatch)=> {
    try{
        await dispatch(AuthThunkCreator())
         dispatch(initializedAppAC(true))
    } catch (error){
        throw Error('some errors')
    }
}
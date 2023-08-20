import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {ProfileActionType, profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {getUserThunkCreator, UserActionType, usersReducer} from "./users-reducer";
import {AuthActionType, authReducer} from "./auth-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";

let rootReducer = combineReducers({
    dialogsPage: dialogReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});


export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunk));


export type AppActionType = UserActionType | ProfileActionType | AuthActionType

export type AppDispatch = ThunkDispatch<AppStateType, void, AppActionType>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,AppStateType, unknown, AppActionType>
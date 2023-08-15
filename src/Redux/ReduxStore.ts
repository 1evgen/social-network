import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

let rootReducer = combineReducers({
    dialogsPage: dialogReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});


export type AppStateType = ReturnType<typeof rootReducer>


export let store = createStore(rootReducer);
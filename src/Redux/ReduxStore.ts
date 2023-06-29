import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
});


export type AppStateType = ReturnType<typeof reducers>


export let store = createStore(reducers);
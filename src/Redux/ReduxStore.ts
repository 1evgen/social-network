import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let reducers = combineReducers({
    dialogReducer,
    profileReducer,
    sidebarReducer,
});



let store = createStore(reducers);
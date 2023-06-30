import React from "react";
import {actionType} from "../../../Redux/Store";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {AppStateType, store} from "../../../Redux/ReduxStore";
import {PostType, addPostActionCreator, changePostAC} from "../../../Redux/profile-reducer";



type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    upDateNewPostText: (text: string) => void
    addPost: () => void
}
const mapStateToProps = (state: AppStateType) => {
    return {
        newPostText: state.profile.post.newPostText,
        profile: state.profile
    }
}
const mapDispatchToProps = (dispatch: (action: actionType) => void) => {
    return {
        upDateNewPostText: (text: string) => {
            if (text || text === '') {
                dispatch(changePostAC(text))
            }
        },
        addPost: () => {
            console.log('from add post ')
            dispatch(addPostActionCreator(store.getState().profile.post.newPostText))
        }
    }
}
export const MyPostContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPost)
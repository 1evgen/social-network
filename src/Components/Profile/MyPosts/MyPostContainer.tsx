import React from "react";
import {AddPostFormType, MyPost} from "./MyPost";
import {connect} from "react-redux";
import {AppActionType, AppStateType} from "../../../Redux/ReduxStore";
import {addPostActionCreator} from "../../../Redux/profile-reducer";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    addPost: (value: AddPostFormType) => void
}
const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profile
    }
}
const mapDispatchToProps = (dispatch: (action: AppActionType) => void) => {
    return {
        addPost: (value: AddPostFormType) => {
            dispatch(addPostActionCreator(value.newPostText))
        }
    }
}
export const MyPostContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPost)
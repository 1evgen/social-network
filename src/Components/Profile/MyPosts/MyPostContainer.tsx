import React from "react";
import {actionType} from "../../../Redux/Store";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {AppStateType, store} from "../../../Redux/ReduxStore";
import {PostType, addPostActionCreator, changePostAC} from "../../../Redux/profile-reducer";

//tateType, store, typeStore was import from Redux/Store

// type typeMyPostsProps = {
//     id: number
//     message: string
//     likesCount: number
// }

// type MyPostMainType = {
//     myPostsFromProfile: Array<typeMyPostsProps>
//     store: typeStore
//     dispatch:(action:actionType)=> void
// }


// export const MyPostContainer = (props: MyPostMainType) => {
//
//     const addPost = () => {
//          props.dispatch(addPostActionCreator(store.getState().post.newPostText))
//     }
//
//     const onChangeHandler = (el: string) => {
//         if (el || el === '') {
//             props.dispatch(changePostAC(el))
//         }
//     }
//
//     let value = props.store._state.post.newPostText
//     return (
//          <div>
//                  <MyPost myPostsFromProfile={props.myPostsFromProfile}
//                          upDateNewPostText={onChangeHandler}
//                          addPost={addPost}
//                          value = {value}
//                  />
//         </div>
//     )
// }

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    upDateNewPostText: (text: string) => void
    addPost: () => void
}
const mapStateToProps = (state: AppStateType) => {
    return {
        newPostText: state.profile.post.newPostText,
        post: state.profile.post,
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
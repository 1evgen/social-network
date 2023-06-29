import React from "react";
import {actionType, addPostActionCreator, changePostAC, store, typeStore} from "../../../Redux/Store";
import {MyPost} from "./MyPost";



type typeMyPostsProps = {
    id: number
    message: string
    likesCount: number
}

type MyPostMainType = {
    myPostsFromProfile: Array<typeMyPostsProps>
    store: typeStore
    dispatch:(action:actionType)=> void
}


export const MyPostContainer = (props: MyPostMainType) => {

    const addPost = () => {
         props.dispatch(addPostActionCreator(store.getState().post.newPostText))
    }
    // upDateNewPostText(newPostElement.current.value)
    const onChangeHandler = (el: string) => {
        if (el || el === '') {
            props.dispatch(changePostAC(el))
        }
    }

    return (
         <div>
                 <MyPost myPostsFromProfile={props.myPostsFromProfile}
                         upDateNewPostText={onChangeHandler}
                         addPost={addPost}/>
        </div>
    )
}
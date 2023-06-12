import React, {LegacyRef} from "react";
import s from './MyPost.module.css'
import {Post} from "./Post/Post";
import {actionType, addPostActionCreator, changePostAC, store, typeStore} from "../../../Redux/State";



type typeMyPostsProps = {
    id: number
    message: string
    likesCount: number

}

type MyPostMainType = {
    myPostsFromProfile: Array<typeMyPostsProps>
    // addPostCallback: (message: string) => void
    store: typeStore
    // upDateNewPostText: (newText: string)=> void
    dispatch:(action:actionType)=> void
}

// addPostCallback(text)
export const MyPost: React.FC<MyPostMainType> = (props) => {
    const {store, myPostsFromProfile, dispatch } = props
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        let text = newPostElement.current?.value
        text && dispatch(addPostActionCreator(store.getState().post.newPostText))
    }

    // upDateNewPostText(newPostElement.current.value)
    const onChangeHandler = () => {
         let el = newPostElement.current?.value
        if (el) {
            dispatch(changePostAC(el))
        }
    }


    let posts = myPostsFromProfile.map((el) => <Post key={el.id} messagePost={el.message} counterLike={el.likesCount}/>)

    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea ref={newPostElement}  onChange={onChangeHandler} value={store._state.post.newPostText} />
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {posts}
        </div>
    )
}
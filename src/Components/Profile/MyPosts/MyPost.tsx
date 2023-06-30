import React, {LegacyRef} from "react";
import {Post} from "./Post/Post";
import {PostType} from "../../../Redux/profile-reducer";


type typeMyPostsProps = {
    id: number
    message: string
    likesCount: number

}

type MyPostMainType = {
    upDateNewPostText: (el: string) => void
    addPost: ()=> void
    profile: PostType
}

// addPostCallback(text)
export const MyPost = (props: MyPostMainType) => {


    let newPostElement = React.createRef<HTMLTextAreaElement>();

    // const addPost = () => {
    //     // let text = newPostElement.current?.value
    //     // text && dispatch(addPostActionCreator(store.getState().post.newPostText))
    // }

    const onInputChange = () => {
        const newText = newPostElement.current?.value || "";
        props.upDateNewPostText(newText);
    };


    let posts = props.profile.post.postData.map((el) =>
        <Post key={el.id} messagePost={el.message} counterLike={el.likesCount}/>)

    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea ref={newPostElement} onChange={onInputChange} value={props.profile.post.newPostText}  />
                    <button onClick={props.addPost}>Add post</button>
                </div>
            </div>
            {posts}
        </div>
    )
}


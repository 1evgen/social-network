import React from "react";
import s from './MyPost.module.css'
import {Post} from "./Post/Post";


type typeMyPostsProps ={
    id: number
    message: string
    likesCount: number
}

type MyPostMainType = {
    myPostsFromProfile: Array<typeMyPostsProps>
}


export const MyPost: React.FC<MyPostMainType> = ({myPostsFromProfile}) => {
    let posts =  myPostsFromProfile.map((el)=> <Post messagePost={el.message} counterLike={el.likesCount} />)
        // myPosts.map((p)=> <Post messagePost={p.message} counterLike={p.likesCount} /> )
    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            {posts}
        </div>
    )
}
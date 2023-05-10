import React from "react";
import s from './MyPost.module.css'
import {Post} from "./Post/Post";

type typePost = {
    id: number
    message: string
    likesCount: number
}


const postData:Array<typePost> = [
    {id: 1, message: 'Hi how are you', likesCount: 15 },
    {id: 2, message: 'Hi, i\'m fine thanks',likesCount: 5 },
]

export const MyPost = () => {

    let posts = postData.map((p)=> <Post messagePost={p.message} counterLike={p.likesCount} /> )

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
            {/*<Post  messagePost={"Hi how are you"} counterLike={15} />*/}
            {/*<Post messagePost={"Hi, i'm fine thanks"} counterLike={25}  />*/}
        </div>
    )
}
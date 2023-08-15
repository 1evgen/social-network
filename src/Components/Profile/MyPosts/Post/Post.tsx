import s from "./Post.module.css";
import React from "react";
import avatar from '../../../../assets/imgs/splinter-ava.png'
type typePosts = {
    messagePost: string
    counterLike: number
}


export const Post = (props: typePosts) => {
    return (
            <div className={s.posts}>
                <div className={s.item}>
                    <img src= {avatar}/>
                    {/*<img src="https://sportarena-cdn.s3.amazonaws.com/production/uploads/player/photo/173827/p101668.png" alt=""/>*/}
                    {props.messagePost}
                    <div>
                    <span>
                        Likes is {props.counterLike}
                    </span>
                    </div>
                </div>
            </div>
    )
}
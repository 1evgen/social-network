import React from "react";
import s from './Profile.module.css'
import {MyPost} from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


type typeMyPostsProps = {
    id: number
    message: string
    likesCount: number
}

type ProfileMainType = {
    myPostsFromApp:Array<typeMyPostsProps>

}

export const Profile: React.FC<ProfileMainType> = ({myPostsFromApp}) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost  myPostsFromProfile={myPostsFromApp}/>
        </div>
    )
}

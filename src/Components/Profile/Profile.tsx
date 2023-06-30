import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";

type ProfileMainType = {
}

export const Profile: React.FC<ProfileMainType> = () => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostContainer />
        </div>
    )
}

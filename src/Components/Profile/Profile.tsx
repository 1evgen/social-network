import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {ProfileType, setUserProfileActionType} from "../../Redux/profile-reducer";

type ProfileMainType = {
    profile: ProfileType


}

export const Profile: React.FC<ProfileMainType> = ({
                                                       profile,


                                                   }) => {

    return (
        <div className={s.content}>
            <ProfileInfo profile={profile}


            />
            <MyPostContainer />
        </div>
    )
}

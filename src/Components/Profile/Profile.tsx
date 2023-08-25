import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../Redux/profile-reducer";


type ProfileMainType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string)=> void

}

export const Profile: React.FC<ProfileMainType> = ({
                                                       profile,
                                                       status,
                                                       updateStatus
                                                   }) => {



    return (
        <div className={s.content}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostContainer  />
        </div>
    )
}

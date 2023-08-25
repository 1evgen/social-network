import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../Common/Preloader/Preloader";
import HeroBanner from '../../../assets/imgs/preview.jpg'
import {ProfileStatus} from "./ProfileStatus";


type ProfileInfoType ={
    profile: ProfileType
    status: string
    updateStatus: (status: string)=> void
}


export const ProfileInfo = (props: ProfileInfoType) => {
    if (props.profile === null) {
        return <Preloader/>
    }
    const profilePhoto = props.profile.photos.small || "";
    return (
        <div className={s.profileInfo}>
            <div className={s.HeroBanner}>
                    <img src={HeroBanner}/>
            </div>

            <div className={s.descriptionBlock}>
              <img src={profilePhoto}/>
                {props.profile.fullName}
            </div>
            <div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>

        </div>
    )
}
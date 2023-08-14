import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../Common/Preloader/Preloader";

type ProfileInfoType ={
    profile: ProfileType
    setUserProfile: (profile: ProfileType) => void
}


export const ProfileInfo = (props: ProfileInfoType) => {
    if (props.profile === null) {
        return <Preloader/>
    }
    const profilePhoto = props.profile.photos.small || "";
    return (
        <div>
            <div>
                <img src="https://e0.365dm.com/21/06/2048x1152/skysports-premier-league-fixtures_5415976.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
              <img src={profilePhoto}/>
                {props.profile.fullName}


            </div>
        </div>
    )

}
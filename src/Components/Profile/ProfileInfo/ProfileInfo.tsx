import React from "react";
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <>
            <div>
                <img src="https://e0.365dm.com/21/06/2048x1152/skysports-premier-league-fixtures_5415976.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </>
    )
}
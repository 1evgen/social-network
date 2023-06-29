import React from "react";
import s from './Profile.module.css'
import {MyPost} from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
// import {actionType, typeStore} from "../../Redux/Store";
// import {MyPostContainer} from "./MyPosts/MyPostContainer";


 export type typeMyPostsProps = {
    id: number
    message: string
    likesCount: number
}

type ProfileMainType = {
    // myPostsFromApp:Array<typeMyPostsProps>
    // store: typeStore
    // dispatch:(action:actionType)=> void
}

export const Profile: React.FC<ProfileMainType> = () => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostContainer />
            {/*<MyPostContainer myPostsFromProfile={myPostsFromApp} store={store} dispatch={dispatch}/>*/}
        </div>
    )
}

import React from "react";
import s from './Profile.module.css'
import {MyPost} from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {actionType, typeStore} from "../../Redux/State";


 export type typeMyPostsProps = {
    id: number
    message: string
    likesCount: number
}

type ProfileMainType = {
    myPostsFromApp:Array<typeMyPostsProps>
    // addPostCallback: (message: string)=> void
    store: typeStore
    // upDateNewPostText: (newText: string)=> void
    dispatch:(action:actionType)=> void
}

export const Profile: React.FC<ProfileMainType> = ({myPostsFromApp,
                                                   // addPostCallback,
                                                       store,
                                                       // upDateNewPostText,
                                                    dispatch
                                                   }

) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost  myPostsFromProfile={myPostsFromApp}
                     // addPostCallback={addPostCallback}
                     store={store}
                     // upDateNewPostText={upDateNewPostText}
                     dispatch={dispatch}
            />
        </div>
    )
}

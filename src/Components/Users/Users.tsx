import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/imgs/user.png";
import {UsersType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../API/api";

type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number)=> void
    usersPage: UsersType
    follow: (userID: number)=> void
    unFollow: (userID: number)=> void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Number[]
}


export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    const followUserHandler = (userId: number)=> {
        props.toggleIsFollowingProgress(true, userId)
        console.log(props.followingInProgress)
        usersApi.followUser(userId).then(response => {
            if(response.data.resultCode === 0){
                props.follow(userId)
            }
            props.toggleIsFollowingProgress(false,userId)
            console.log(props.followingInProgress)
        })
    }

const  unfollowUserHandler = (userId: number)=> {

        props.toggleIsFollowingProgress(true, userId)
        usersApi.unfollowUser(userId).then(response => {
            if(response.data.resultCode === 0){
                props.unFollow(userId)
            }
            props.toggleIsFollowingProgress(false, userId)
        })

}

    return <div>
        {pages.map((p) => {
            return <span className={props.currentPage === p ? styles.selectedPage : ''}
                         onClick={() => {
                             props.onPageChanged(p)
                         }}>{p}</span>
        })}
        {
            props.usersPage.users.map((u) => <div key={u.id}>
                        <span>
                            <div> 
                                <NavLink to={'/profile/'+ u.id}>
                                <img className={styles.userPhoto}
                                       src={u.photos.small ? u.photos.small : userPhoto}
                                       alt="photo"/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed ?
                                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => unfollowUserHandler(u.id)}>Unfollow</button>
                                    :
                                     <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => followUserHandler(u.id)}>Follow</button>
                                }
                            </div>
                        </span>
                <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>

            </div>)
        }
    </div>
}
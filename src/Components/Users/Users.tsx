import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/imgs/user.png";
import {UsersType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../../../src/Components/Users/Paginator";


type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number)=> void
    usersPage: UsersType
    followingInProgress: Number[]
    followThunkCreator: (userID: number)=> void
    unfollowThunkCreator: (userID: number)=> void
}

export const Users = (props: UsersPropsType) => {

    const followUserHandler = (userId: number)=> props.followThunkCreator(userId)
    const unfollowUserHandler = (userId: number)=> props.unfollowThunkCreator(userId)

    return <div>
        <Paginator currentPage={props.currentPage}
                   pageSize={props.pageSize}
                   onPageChanged={ props.onPageChanged}
                   totalUserCount={props.totalUserCount}/>
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
                                    <button disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => unfollowUserHandler(u.id)}>Unfollow</button>
                                    :
                                     <button disabled={props.followingInProgress.some(id => id === u.id)}
                                             onClick={() => followUserHandler(u.id)}>Follow</button>
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
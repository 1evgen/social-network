import React, {useEffect} from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/imgs/user.png'



export const UsersFunctionalComponent = (props: UsersPropsType) => {
    useEffect(()=> {
        if (props.usersPage.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then((resp) =>
               props.setUsers(resp.data.items) )
        }
    },[props.usersPage.users])
        return (
            <div>
                {
                    props.usersPage.users.map((u) => <div key={u.id}>
                        <span>
                            <div> <img className={styles.userPhoto}
                                       src={u.photos.small ? u.photos.small : userPhoto}
                                       alt="photo"/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => props.unFollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => props.follow(u.id)}>Follow</button>
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
        );
    }

import React from 'react';
import {AppStateType} from "../../Redux/ReduxStore";
import {UsersPropsType} from "./UsersContainer";
import {inspect} from "util";
import styles from './Users.module.css'



export const Users = (props: UsersPropsType) => {
    if(props.usersPage.users.length === 0){
        props.setUsers([
            { id: 1, photoUrl: 'https://icdn.caughtoffside.com/wp-content/uploads/2021/08/1006192898.jpg',
                fullName: 'Harry Kane', status:  "I'd like to find a new club.",followed: false,
                location: {city: 'London', country: 'England'}},

            { id: 2,photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQm7zE-kUqB4_a2LkHooO29_AFokn9-JN8g&usqp=CAU',
                fullName: 'Harry Maguire', status:  "I'm Harry Maguire.",followed: true,
                location: {city: 'Manchester', country: 'England'}},

            { id: 1,photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRewKpe7LI7bOMFxd4M1RS78UmXZNiUDGT2Hg&usqp=CAU',
                fullName: 'Erling Haaland', status:  "Man city is champion",followed: true,
                location: {city: 'Manchester',country: 'Norway'}},

            { id: 1,photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9Obc9H-NHvvGNaUWi50lVUG0MQRTivTGMQ&usqp=CAU',
                fullName: 'Mohamed Salah', status:  'You\'ll Never Walk Alone', followed: false,
                location: {city: 'Liverpool', country: 'Egypt' }}
        ])
    }

    return (
        <div>
            {
                props.usersPage.users.map((u)=> <div key={u.id}>
                        <span>
                            <div> <img className={styles.userPhoto}
                                      src={u.photoUrl}
                                      alt="photo"/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={()=> props.unFollow(u.id)}>Unfollow</button>
                                    : <button onClick={()=> props.follow(u.id)}>Follow</button>
                                }
                            </div>
                        </span>

                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>

                </div>)




            }
        </div>
    );
};


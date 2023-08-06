import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/imgs/user.png";
import {MapDispatchToPropsType, mapStateToPropsType} from "./UsersContainer";
import axios from "axios";

type PropsType = mapStateToPropsType & MapDispatchToPropsType

export class UsersC extends React.Component<PropsType> {

        constructor(props: PropsType) {
            super(props);
        }
        componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then((resp) => {
                    this.props.setUsers(resp.data.items)
                    this.props.setTotalCount(resp.data.totalCount)
                })
            }

            onPageChanged = (pageNumber: number)=> {
                this.props.setCurrentPage(pageNumber)
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                    .then((resp) => this.props.setUsers(resp.data.items))
            }




    render() {
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        let  pages = []
        for(let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }
        return <div>
            {pages.map((p)=> {
              return <span className={this.props.currentPage  === p ? styles.selectedPage: ''}
               onClick={()=> {this.onPageChanged(p)}
              }
              >{p}</span>

            })}

            {
                this.props.usersPage.users.map((u) => <div key={u.id}>
                        <span>
                            <div> <img className={styles.userPhoto}
                                       src={u.photoUrl ? u.photoUrl : userPhoto}
                                       alt="photo"/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => this.props.unFollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
}
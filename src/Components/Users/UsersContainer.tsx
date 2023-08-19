import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {
    ActionType,
    followAC,
    infoAboutUserType,
    setCurrentPageAC, setTotalCountAC,
    setUserAC, toggleIsFetchingAC, toggleIsFollowingProgressAC,
    unFollowAC,
    UsersType
} from "../../Redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {usersApi} from "../../API/api";
import {Dispatch} from "redux";
import {actionType} from "../../Redux/auth-reducer";


export type mapStateToPropsType = {
    usersPage: UsersType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Number[]
}

export type MapDispatchToPropsType = {
        follow: (userID: number)=> void
        unFollow: (userID: number)=> void
        setUsers: (user: Array<infoAboutUserType>)=> void
        setCurrentPage: (pageNumber: number) => void
        setTotalCount: (totalCount: number) => void
        toggleIsFetching:(isFetching: boolean)=> void
        toggleIsFollowingProgress: (isFetching: boolean, userId: number)=> void
}

type PropsType = mapStateToPropsType & MapDispatchToPropsType

export class UsersContainer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }
    componentDidMount() {
        this.props.toggleIsFetching(true)
        const currentPage = this.props.currentPage
        const pageSize = this.props.pageSize
        usersApi.getUsers(currentPage, pageSize)
            .then((resp) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(resp.items)
                this.props.setTotalCount(resp.totalCount)
            })
    }

    onPageChanged = (pageNumber: number)=> {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        const pageSize = this.props.pageSize
            usersApi.getUsers(pageNumber, pageSize)
            .then((resp) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(resp.items)})
    }

    render() {
        return <div>
         {this.props.isFetching ? <Preloader /> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   usersPage={this.props.usersPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   followingInProgress = {this.props.followingInProgress}
            />
        </div>

    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
        return {
                usersPage: state.usersPage,
                pageSize: state.usersPage.pageSize,
                totalUserCount: state.usersPage.totalUserCount,
                currentPage: state.usersPage.currentPage,
                isFetching: state.usersPage.isFetching,
                followingInProgress: state.usersPage.followingInProgress
        }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionType>): MapDispatchToPropsType=> {
    return {
        follow: (userId)=> {
            return dispatch(followAC(userId))
        },
        unFollow: (userID)=> {
            dispatch(unFollowAC(userID))
        },
        setUsers:(user)=> {
            return dispatch(setUserAC(user))
        } ,
        setCurrentPage: (pageNumber)=> {
            return dispatch(setCurrentPageAC(pageNumber))
        } ,
        toggleIsFetching: (isFetching)=> {
            return dispatch(toggleIsFetchingAC(isFetching))
        },
        setTotalCount: (totalCount)=> {
            return dispatch(setTotalCountAC(totalCount))
        },
        toggleIsFollowingProgress: (isFetching, userId)=> {
            return dispatch(toggleIsFollowingProgressAC(isFetching, userId))
        }
    }
}


export type UsersPropsType = mapStateToPropsType & MapDispatchToPropsType

export default connect<mapStateToPropsType,MapDispatchToPropsType,{},AppStateType>(mapStateToProps,mapDispatchToProps)(UsersContainer)
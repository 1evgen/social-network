import React from 'react';
import {connect} from "react-redux";
import {AppDispatch, AppStateType} from "../../Redux/ReduxStore";
import {
   followThunkCreator, getUserThunkCreator,
    infoAboutUserType,
    setCurrentPageAC,
    setUserAC,
    unfollowThunkCreator,
    UsersType
} from "../../Redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsersPage
} from "../../Redux/users-selectors";


export type mapStateToPropsType = {
    usersPage: UsersType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Number[]
}

export type MapDispatchToPropsType = {
        setUsers: (user: Array<infoAboutUserType>)=> void
        setCurrentPage: (pageNumber: number) => void
        getUserThunkCreator: (currentPage: number,pageSize: number)=> void
        followThunkCreator: (userId: number)=> void
        unfollowThunkCreator: (userId: number)=> void
}

export type PropsType = mapStateToPropsType & MapDispatchToPropsType

export class UsersContainer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }
    componentDidMount() {
        this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number)=> {
        this.props.setCurrentPage(pageNumber)
        this.props.getUserThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return <div>
         {this.props.isFetching ? <Preloader /> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   usersPage={this.props.usersPage}
                   followingInProgress = {this.props.followingInProgress}
                   followThunkCreator = {this.props.followThunkCreator}
                   unfollowThunkCreator = {this.props.unfollowThunkCreator}
            />
        </div>

    }
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
        return {
                usersPage: getUsersPage(state),
                pageSize: getPageSize(state),
                totalUserCount: getTotalUserCount(state),
                currentPage: getCurrentPage(state),
                isFetching: getIsFetching(state),
                followingInProgress: getFollowingInProgress(state)
        }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType=> {
    return {
        setUsers:(user)=> {
            return dispatch(setUserAC(user))
        } ,
        setCurrentPage: (pageNumber)=> {
            return dispatch(setCurrentPageAC(pageNumber))
        } ,
        getUserThunkCreator:(currentPage, pageSize )=> {
            return dispatch(getUserThunkCreator(currentPage, pageSize))
        },
        followThunkCreator:(userId)=> {
            return dispatch(followThunkCreator(userId))
        },
        unfollowThunkCreator:(userId)=> {
            return dispatch(unfollowThunkCreator(userId))
        }
    }
}


export type UsersPropsType = mapStateToPropsType & MapDispatchToPropsType
//export default connect<mapStateToPropsType,MapDispatchToPropsType,{},AppStateType>(mapStateToProps,mapDispatchToProps
// )(UsersContainer)

export default compose<React.ComponentType>(
    connect<mapStateToPropsType,MapDispatchToPropsType,{},AppStateType>(mapStateToProps,mapDispatchToProps)
)
(UsersContainer)
import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import loading from '../../assets/imgs/loading.svg'
import {
    ActionType,
    followAC,
    infoAboutUserType,
    setCurrentPageAC, setTotalCountAC,
    setUserAC, toggleIsFetchingAC,
    unFollowAC,
    UsersType
} from "../../Redux/users-reducer";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";


export type mapStateToPropsType = {
    usersPage: UsersType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}

export type MapDispatchToPropsType = {
        follow: (userID: number)=> void
        unFollow: (userID: number)=> void
        setUsers: (user: Array<infoAboutUserType>)=> void
        setCurrentPage: (pageNumber: number) => void
        setTotalCount: (totalCount: number) => void
        toggleIsFetching:(isFetching: boolean)=> void
}

type PropsType = mapStateToPropsType & MapDispatchToPropsType

export class UsersContainer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((resp) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(resp.data.items)
                this.props.setTotalCount(resp.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number)=> {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((resp) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(resp.data.items)})

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
                   unFollow={this.props.unFollow}/>
        </div>

    }
}



const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
        return {
                usersPage: state.usersPage,
                pageSize: state.usersPage.pageSize,
                totalUserCount: state.usersPage.totalUserCount,
                currentPage: state.usersPage.currentPage,
                isFetching: state.usersPage.isFetching
        }
}

export type UsersPropsType = mapStateToPropsType & MapDispatchToPropsType

const mapDispatchToProps = (dispatch: Dispatch<ActionType>): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (user: Array<infoAboutUserType>) => {
            dispatch(setUserAC(user))
        },
        setCurrentPage: (pageNumber: number)=> {
            dispatch(setCurrentPageAC(pageNumber))
    },
        setTotalCount: (totalCount)=> {
            dispatch(setTotalCountAC(totalCount))
        },
        toggleIsFetching:(isFetching)=> {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }


}
export default connect<mapStateToPropsType,MapDispatchToPropsType,{},AppStateType>(mapStateToProps,mapDispatchToProps)(UsersContainer)
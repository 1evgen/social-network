import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {
    ActionType,
    followAC,
    infoAboutUserType,
    setCurrentPageAC, setTotalCountAC,
    setUserAC,
    unFollowAC,
    UsersType
} from "../../Redux/users-reducer";
import {Dispatch} from "redux";
import {UsersC} from "./UsersC";



export type mapStateToPropsType = {
    usersPage: UsersType
    pageSize: number
    totalUserCount: number
    currentPage: number
}

export type MapDispatchToPropsType = {
        follow: (userID: number)=> void
        unFollow: (userID: number)=> void
        setUsers: (user: Array<infoAboutUserType>)=> void
        setCurrentPage: (pageNumber: number) => void
        setTotalCount: (totalCount: number) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
        return {
               usersPage: state.usersPage,
               pageSize: state.usersPage.pageSize,
               totalUserCount: state.usersPage.totalUserCount,
               currentPage: state.usersPage.currentPage
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
        }
    }


}
export const UsersContainer = connect<mapStateToPropsType,MapDispatchToPropsType,{},AppStateType>(mapStateToProps,mapDispatchToProps)(UsersC)
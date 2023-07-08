import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../Redux/ReduxStore";
import {ActionType, followAC, infoAboutUserType, setUserAC, unFollowAC, UsersType} from "../../Redux/users-reducer";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    usersPage: UsersType
}

type MapDispatchToPropsType = {
        follow: (userID: number)=> void
        unFollow: (userID: number)=> void
        setUsers: (user: Array<infoAboutUserType>)=> void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
        return {
               usersPage: state.usersPage
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
        }

    }


}
export const UsersContainer = connect<mapStateToPropsType,MapDispatchToPropsType,{},AppStateType>(mapStateToProps,mapDispatchToProps)(Users)
import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {
    actionType,
    ProfileType,
    setUserProfileAC,
} from "../../Redux/profile-reducer";
import {Dispatch} from "redux";


export type mapStateToPropsType = {
    profile: ProfileType
}

export type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type PropsType = mapStateToPropsType & MapDispatchToPropsType


export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2")
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} setUserProfile={this.props.setUserProfile} />;
    }
}
const mapStateToProps = (state: AppStateType)=> ({
        profile: state.profile.profile
})
const mapDispatchToProps = (dispatch: Dispatch<actionType>): MapDispatchToPropsType => {
    return {
        setUserProfile: (profile) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}
export default  connect<mapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(ProfileContainer)
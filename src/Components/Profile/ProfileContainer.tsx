import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppDispatch, AppStateType} from "../../Redux/ReduxStore";
import {
    getProfileThunkCreator,
    ProfileType,
    setUserProfileAC,
} from "../../Redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


export type mapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
}
export type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getProfileThunkCreator: (userId: string)=> void
}

type PathParamsType = {
    userId: string,
}

type OwnPropsType = mapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = "2"
        }
            this.props.getProfileThunkCreator(userId)
    }

    render() {
        if(!this.props.isAuth) return  <Redirect to={'/login'}></Redirect>

        return <Profile profile={this.props.profile} />;
    }
}
const mapStateToProps = (state: AppStateType)=> ({
        profile: state.profile.profile,
        isAuth: state.auth['isAuth']
})

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        setUserProfile: (profile) => {
            dispatch(setUserProfileAC(profile))
        },
        getProfileThunkCreator: (userId)=> {
            dispatch(getProfileThunkCreator(userId))
        }
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default  connect<mapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)
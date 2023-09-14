import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppDispatch, AppStateType} from "../../Redux/ReduxStore";
import {
    getProfileThunkCreator,
    ProfileType, setStatusThunkCreator,
    setUserProfileAC, updateStatusThunkCreator,
} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export type mapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
    status: string
    authorizedUserId: string
}
export type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getProfileThunkCreator: (userId: string)=> void
    setStatus: (userId: string)=> void
    updateStatus: (status: string)=> void
}

type PathParamsType = {
    userId: string ,
}

type OwnPropsType = mapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserId
            // "29311"
        }
            this.props.getProfileThunkCreator(userId)
            this.props.setStatus(userId)

    }

    render() {
        return <Profile profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}

        />;
    }
}

const mapStateToProps = (state: AppStateType)=> ({
        profile: state.profile.profile,
        isAuth: state.auth['isAuth'],
        status: state.profile.status,
        authorizedUserId: state.auth['id']
})

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        setUserProfile: (profile) => {
            dispatch(setUserProfileAC(profile))
        },
        getProfileThunkCreator: (userId)=> {
            dispatch(getProfileThunkCreator(userId))
        },
        setStatus: (userId)=> {
            dispatch(setStatusThunkCreator(userId))
        },
        updateStatus: (status)=> {
            dispatch(updateStatusThunkCreator(status))
        }
    }
}

//let WithUrlDataContainerComponent = withRouter(ProfileContainer)
//export default withAuthRedirect(connect<mapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)
// (WithUrlDataContainerComponent))

export default compose<React.ComponentType>(
    connect<mapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
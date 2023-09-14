import React from "react";
import {Header} from "./Header";
import {
    AuthThunkCreator,
    InfoAuthType,
    logoutTC,
    setUserDataAC,
    StateType
} from "../../Redux/auth-reducer";
import {AppActionType, AppStateType} from "../../Redux/ReduxStore";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";




type mapStateToPropsType = {
    auth: StateType
}
export type mapDispatchToPropsType = {
    setAuthUserData: (data: InfoAuthType) => void
    AuthThunkCreator: ()=> void
    logout: ()=> void
}

type PropsType = mapStateToPropsType & mapDispatchToPropsType


export  class HeaderContainer extends React.Component<PropsType>{

    render() {
        return <Header auth={this.props.auth}
                       setAuthUserData = {this.props.setAuthUserData}
                       logout={this.props.logout}
        />
    }
}

export const mapStateToProps = (state: AppStateType) => ({
    auth: state.auth
})

export const mapDispatchToProps = (dispatch: Dispatch<AppActionType>): mapDispatchToPropsType => {
            return {
                setAuthUserData: (data: InfoAuthType) => {
                    dispatch(setUserDataAC(data))
                },
                AuthThunkCreator: ()=> {
                    dispatch<any>(AuthThunkCreator())
                },
                logout: ()=> {
                    dispatch<any>(logoutTC())
                }
            }
}

//export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,mapDispatchToProps )
//(HeaderContainer)

export default compose<React.ComponentType>(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,mapDispatchToProps )
)(HeaderContainer)

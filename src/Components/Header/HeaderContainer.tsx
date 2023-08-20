import React from "react";
import {Header} from "./Header";
import {AuthActionType, AuthThunkCreator, setUserDataAC, StateType} from "../../Redux/auth-reducer";
import {AppActionType, AppDispatch, AppStateType} from "../../Redux/ReduxStore";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {InfoAuthType, usersApi} from "../../API/api";



type mapStateToPropsType = {
    auth: StateType
}
export type mapDispatchToPropsType = {
    setAuthUserData: (data: InfoAuthType) => void
    AuthThunkCreator: ()=> void
}

type PropsType = mapStateToPropsType & mapDispatchToPropsType


export  class HeaderContainer extends React.Component<PropsType>{

    componentDidMount() {
            this.props.AuthThunkCreator()
        // usersApi.getMe()
        //     .then(response => {
        //      if(response.resultCode  === 0){
        //          this.props.setAuthUserData(response.data)
        //      }
        //     })
    }

    render() {
        return <Header auth={this.props.auth} setAuthUserData = {this.props.setAuthUserData}  />
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
                }
            }
}

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,mapDispatchToProps )(HeaderContainer)



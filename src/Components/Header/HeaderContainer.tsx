import React from "react";
import {Header} from "./Header";
import {actionType, InfoAuthType, setUserDataAC, StateType} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/ReduxStore";
import axios from "axios";
import {connect} from "react-redux";
import {Dispatch} from "redux";



type mapStateToPropsType = {
    auth: StateType

}
export type mapDispatchToPropsType = {
    setAuthUserData: (data: InfoAuthType) => void
}

type PropsType = mapStateToPropsType & mapDispatchToPropsType


export  class HeaderContainer extends React.Component<PropsType>{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0//auth/me', {
            withCredentials: true
        })
            .then(response => {
             if(response.data.resultCode === 0){
                 this.props.setAuthUserData(response.data.login)
             }
             console.log(response.data)
            })
    }

    render() {
        return <Header auth={this.props.auth} setAuthUserData = {this.props.setAuthUserData}  />
    }
}

export const mapStateToProps = (state: AppStateType) => ({
    auth: state.auth
})

export const mapDispatchToProps = (dispatch: Dispatch<actionType>): mapDispatchToPropsType => {
            return {
                setAuthUserData: (data: InfoAuthType) => {
                    dispatch(setUserDataAC(data))
                }
            }
}

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,mapDispatchToProps )(HeaderContainer)

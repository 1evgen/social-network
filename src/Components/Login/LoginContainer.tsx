import React, { Component } from "react";
import { Login } from "./Login";
import { connect } from "react-redux";
import {DataAuthType, loginTC, LoginAC, StateType} from "../../Redux/auth-reducer";
import { AppDispatch, AppStateType } from "../../Redux/ReduxStore";

type MapDispatchToPropsType = {
    loginTC: (dataAuth: DataAuthType) => void;

};
type MapStateToPropsType = {
    auth: StateType
};

type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType;

class LoginContainer extends Component<LoginPropsType> {



    render() {
        return <Login loginTC={this.props.loginTC} auth={this.props.auth} />;
    }
}

export const mapStateToProps = (state: AppStateType) => ({
    auth: state.auth
});

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        loginTC: (dataAuth) => {
            dispatch(loginTC(dataAuth));
        },
    };
};

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
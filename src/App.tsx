import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import {connect} from "react-redux";
import {AppStateType} from "./Redux/ReduxStore";
import {initializeAppTC} from "./Redux/app-reducer";
import {Preloader} from "./Components/Common/Preloader/Preloader";

export type typeMyPostsProps = {
    id: number
    message: string
    likesCount: number
}

export type MapDispatchToPropsType = {
    initializeAppTC: ()=> void
}
export type MapStateToPropsType = {
    initialized: boolean
}

type PropsType = MapDispatchToPropsType & MapStateToPropsType
class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initializeAppTC()
    }
    render() {
        if(!this.props.initialized){
            return  <Preloader />
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <DialogsContainer/>}>
                    </Route>
                    <Route path='/profile/:userId?' render={() =>
                        <ProfileContainer/>}>
                    </Route>
                    <Route path='/users' render={() => <UsersContainer/>}></Route>
                    <Route path='/login' render={() => <LoginContainer/>}></Route>
                </div>
            </div>
        )
    }
}

export const MapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})



// export default App;
export  default  connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(MapStateToProps, {initializeAppTC})(App)
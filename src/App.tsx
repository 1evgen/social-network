import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";

export type typeMyPostsProps = {
    id: number
    message: string
    likesCount: number
}

const App: React.FC = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar/>
            <div className="app-wrapper-content">
            <Route path='/dialogs' render={() => <DialogsContainer /> }>
                </Route>
                <Route path='/profile/:userId?' render={() =>
                     <ProfileContainer />}>
                </Route>
                <Route path= '/users' render={()=> <UsersContainer />}></Route>
                <Route path='/login'  render={()=> <Login />}></Route>
            </div>
        </div>
    )
}

export default App;

import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {Users} from "./Components/Users/Users";
import {UsersContainer} from "./Components/Users/UsersContainer";

export type typeMyPostsProps = {
    id: number
    message: string
    likesCount: number
}


const App: React.FC = () => {
    return (
        <div className="app-wrapper">
            <Header/>

            <Navbar/>
            <div className="app-wrapper-content">

            <Route path='/dialogs' render={() => <DialogsContainer /> }>
                </Route>

                <Route path='/profile' render={() =>
                     <Profile />}>
                </Route>
                <Route path= '/users' render={()=> <UsersContainer />}></Route>
            </div>
        </div>
    )
}

export default App;

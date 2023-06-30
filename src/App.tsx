import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";

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
            </div>
        </div>
    )
}

export default App;

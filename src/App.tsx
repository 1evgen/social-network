import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

type dialogsTypeProps = {
    id: number
    name: string
}
type messageTypeProps = {
    id: number
    message: string
}

type typeMyPostsProps = {
    id: number
    message: string
    likesCount: number
}

type typeMainForComponent = {
    dialogs: Array<dialogsTypeProps>
    messages: Array<messageTypeProps>
    myPosts: Array<typeMyPostsProps>
}


const App: React.FC<typeMainForComponent> = ({
                                                 dialogs,
                                                 messages,
                                                 myPosts
                                             }) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() =>
                        <Dialogs dialogs={dialogs}
                                 messages={messages}
                        />}>
                    </Route>
                    <Route path='/profile' render={() => <Profile  myPostsFromApp={myPosts}/>}></Route>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

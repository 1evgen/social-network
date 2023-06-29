import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import {actionType} from "./Redux/Store";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";


// type dialogsTypeProps = {
//     id: number
//     name: string
// }
// type messageTypeProps = {
//     id: number
//     message: string
// }

export type typeMyPostsProps = {
    id: number
    message: string
    likesCount: number
}

// type typeMainForComponent = {
//     dialogs: Array<dialogsTypeProps>
//     messages: Array<messageTypeProps>
//     myPosts: Array<typeMyPostsProps>
//     // store: typeStore
//     dispatch: (action: actionType) => void
// }


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

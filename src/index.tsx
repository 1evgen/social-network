import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from './Redux/State'



ReactDOM.render(
    <App dialogs={state.dialog.dialogsData}
         messages={state.dialog.messagesData}
         myPosts={state.post.postData}

    />,
    document.getElementById('root')
);
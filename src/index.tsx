import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const dialogsData = [
    {id:1, name: "Ward" },
    {id:2, name: "Maddison" },
    {id:3, name: "Tielemans" },
    {id:4, name: "Ndidi" },
    {id:5, name: "Daka" },
]

const messagesData = [
    {id: 1, message: 'Hi' },
    {id: 2, message: 'Hello' },
    {id: 3, message: 'How are you' },
    {id: 4, message: 'fine' },
    {id: 5, message: 'Yo' },
]


const postData = [
    {id: 1, message: 'Hi how are you', likesCount: 15 },
    {id: 2, message: 'Hi, i\'m fine thanks',likesCount: 5 },
]


ReactDOM.render(
    <App dialogs={dialogsData}
         messages={messagesData}
         myPosts={postData}


    />,
    document.getElementById('root')
);
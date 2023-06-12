import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType, store, typeStore} from './Redux/State'


export let RerenderEntireTree = (state: StateType) => {
    console.log('state', state);
    ReactDOM.render(
        <App dialogs={state.dialog.dialogsData}
             messages={state.dialog.messagesData}
             myPosts={state.post.postData}
             // addPostCallback={store.addPostCallback.bind(store)}
             store={store}
             // upDateNewPostText = {store.upDateNewPostText.bind(store)}
             dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}

RerenderEntireTree(store.getState());
store.subscribe(RerenderEntireTree)

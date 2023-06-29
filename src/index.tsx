import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {StateType} from './Redux/Store'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./Redux/ReduxStore";


// export let RerenderEntireTree = (state: StateType) => {
//     // ReactDOM.render(
//     //     <BrowserRouter>
//     //         <Provider store={store}>
//     //     <App
//     //         // dialogs={state.dialog.dialogsData}
//     //         //  messages={state.dialog.messagesData}
//     //         //  myPosts={state.post.postData}
//     //         //  store={store}
//     //         //  dispatch={store.dispatch.bind(store)}
//     //     />,
//     //         </Provider>
//     //     </BrowserRouter>, document.getElementById('root')
//     // );
//
// }

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App
                // dialogs={state.dialog.dialogsData}
                //  messages={state.dialog.messagesData}
                //  myPosts={state.post.postData}
                //  store={store}
                //  dispatch={store.dispatch.bind(store)}
            />,
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);

// RerenderEntireTree(store.getState());
// store.subscribe(RerenderEntireTree)

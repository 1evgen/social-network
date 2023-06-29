import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


 test('xx',()=> {

})

// test('renders learn react link', () => {
//   const dialogsData = [
//     {id:1, name: "Ward" },
//     {id:2, name: "Maddison" },
//     {id:3, name: "Tielemans" },
//     {id:4, name: "Ndidi" },
//     {id:5, name: "Daka" },
//   ];
//
//   const messagesData = [
//     {id: 1, message: 'Hi' },
//     {id: 2, message: 'Hello' },
//     {id: 3, message: 'How are you' },
//     {id: 4, message: 'fine' },
//     {id: 5, message: 'Yo' },
//   ];
//
//   let myPostsData = [
//     {id: 1, message: 'Hi how are you', likesCount: 15 },
//     {id: 2, message: 'Hi, i\'m fine thanks',likesCount: 5 },
//   ];
//
//   render(<App myPosts= {myPostsData}
//               addPostCallback={addPostCallback}
//               dialogs={dialogsData}
//               messages={messagesData}
//               state={state}
//               upDateNewPostText = {upDateNewPostText}
//   />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
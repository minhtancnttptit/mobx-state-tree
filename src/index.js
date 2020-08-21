import React from 'react';
import ReactDOM from 'react-dom';
import { onSnapshot } from 'mobx-state-tree';

import App from './component/App';

import { Group } from './models/Group';

let initialState = {
  users: {
    'id1': {
      id: 'id1',
      name: 'Tan',
      gender: 'm',
    },
    'id2': {
      id: 'id2',
      name: 'Lan',
      gender: 'f',
    },
  },
};

// const savedState = localStorage.getItem('wishlistapp');

// if (savedState) {
//   const parsedState = JSON.parse(savedState);
//   if (WishList.is(parsedState)) {
//     initialState = parsedState;
//   }
// }

const group = Group.create(initialState);
console.log(group);

// onSnapshot(wishList, (snapshot) => {
//   console.log('save localStorage')
//   localStorage.setItem('wishlistapp', JSON.stringify(snapshot));
// })

ReactDOM.render(
  <React.StrictMode>
    <App group={group} />
  </React.StrictMode>,
  document.getElementById('root')
);

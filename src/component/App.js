import React, { useState } from 'react';

import { WishListView } from './WishListView';
import { values } from 'mobx';

function App({ group }) {
  const [state, setState] = useState({
    selectedUser: null,
  });

  console.log(group.users);

  const { selectedUser } = state;
  
  return (
    <div className="App">
      <select onChange={onSelectUser}>
        <option>- Select user -</option>
        {values(group.users).map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      { selectedUser && (
        <WishListView wishList={selectedUser.wishList} />
      )}

    </div>
  );

  function onSelectUser({ target }) {
    setState({
      selectedUser: target.value,
    });
  }
}

export default App;

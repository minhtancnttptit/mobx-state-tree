import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { clone, applySnapshot, getSnapshot } from 'mobx-state-tree';

import { WishListItemEdit } from './WishListItemEdit';

const WishListItemView = observer(({ item }) => {
  const [state, setState] = useState({
    isEditting: false,
    clonedItem: {},
  });

  const { isEditting, clonedItem } = state;

  return (
    <li className="item">
      {isEditting ? (
        <>
          <WishListItemEdit item={clonedItem} />
          <button onClick={onCancelEdit}>Cancel edit</button>
          <button onClick={onSaveEdit}>Save</button>
        </>
      ) : (
        <>
          {item.image && <img src={item.image} />}
          <h3>{item.name}</h3>
          <span>{item.price}</span>
          <button onClick={onToggleEdit}>Edit</button>
          <button onClick={item.remove}>Remove</button>
        </>
      )}
    </li>
  );

  function onToggleEdit() {
    setState({
      isEditting: true,
      clonedItem: clone(item),
    });
  }

  function onCancelEdit() {
    setState({
      isEditting: false,
    })
  }

  function onSaveEdit() {
    applySnapshot(item, getSnapshot(clonedItem));
    setState({
      isEditting: false,
      clonedItem: {},
    });
  }

});

export { WishListItemView };

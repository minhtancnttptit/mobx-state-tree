import React, { useState } from 'react';
import { observer } from 'mobx-react';

import { WishListItemEdit } from './WishListItemEdit';

import { WishListItem } from '../models/WishList';

const WishListItemEntry = observer(({ wishlist }) => {
  const [state, setState] = useState({
    entry: WishListItem.create({
      name: '',
      price: 0,
      image: ''
    }),
  })

  const { entry } = state;

  return (
    <div>
      <WishListItemEdit item={entry} />
      <button onClick={onAdd}>Add</button>
    </div>
  );

  function onAdd() {
    wishlist.add(entry);
    setState({
      entry: WishListItem.create({
        name: '',
        price: 0,
        image: '',
      }),
    });
  }
});

export { WishListItemEntry };

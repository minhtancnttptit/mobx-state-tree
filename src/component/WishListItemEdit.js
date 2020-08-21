import React from 'react';
import { observer } from 'mobx-react';

const WishListItemEdit = observer(({ item }) => {
  return (
    <div className="item-edit">
      Thing: <input value={item.name} onChange={onNameChange} />
      Price: <input value={item.price} onChange={onPriceChange} />
      Image: <input value={item.image} onChange={onImageChange} />
    </div>
  );

  function onNameChange({ target }) {
    item.changeName(target.value);
  }

  function onPriceChange({ target }) {
    const price = parseInt(target.value);
    if (!isNaN(price)) {
      item.changePrice(price);
    }
  }

  function onImageChange({ target }) {
    item.changeImage(target.value);
  }
})

export { WishListItemEdit };

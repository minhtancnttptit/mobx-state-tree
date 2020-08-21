import { types } from 'mobx-state-tree';
import { WishList } from './WishList';

const User = types.model({
  id: types.string,
  name: types.string,
  gender: types.enumeration('gender', ['m', 'f']),
  wishlist: types.optional(WishList, {}),
});

const Group = types.model({
  users: types.map(User),
});

export { Group };
